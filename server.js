import { createServer as createHttpServer } from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { config as loadEnv } from 'dotenv';
import express from 'express';
import React from 'react';
import { Resend } from 'resend';

import ContactConfirmationEmail from './emails/contact-confirmation.js';
import ContactNotificationEmail from './emails/contact-notification.js';
import InviteConfirmationEmail from './emails/invite-confirmation.js';
import InviteNotificationEmail from './emails/invite-notification.js';

loadEnv({ path: '.env.local' });
loadEnv();

const app = express();
const httpServer = createHttpServer(app);
const rootDir = path.dirname(fileURLToPath(import.meta.url));
const indexHtmlPath = path.join(rootDir, 'index.html');
const distDir = path.join(rootDir, 'dist');

const args = process.argv.slice(2);
const hostArgIndex = args.indexOf('--host');
const portArgIndex = args.indexOf('--port');
const host = hostArgIndex >= 0 ? args[hostArgIndex + 1] : process.env.HOST || '0.0.0.0';
const defaultPort =
    process.env.NODE_ENV === 'production' || args.includes('--prod') || args.includes('--production')
        ? '3000'
        : '8087';
const port = Number.parseInt(
    portArgIndex >= 0 ? args[portArgIndex + 1] : process.env.PORT || defaultPort,
    10
);
const isProduction =
    args.includes('--prod') ||
    args.includes('--production') ||
    process.env.NODE_ENV === 'production';

const configuredContactRecipients = (process.env.CONTACT_FORM_TO || '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);

app.disable('x-powered-by');
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
    res.status(200).json({
        ok: true,
        contactRecipientConfigured: configuredContactRecipients.length > 0,
        resendConfigured: Boolean(process.env.RESEND_API_KEY),
        resendFromConfigured: Boolean(process.env.RESEND_FROM),
    });
});

function asSingleLine(value, maxLength = 200) {
    return String(value ?? '')
        .trim()
        .replace(/\s+/g, ' ')
        .slice(0, maxLength);
}

function asMultiline(value, maxLength = 4000) {
    return String(value ?? '').replace(/\r\n/g, '\n').trim().slice(0, maxLength);
}

function asList(value, maxItems = 10, maxLength = 80) {
    if (!Array.isArray(value)) {
        return [];
    }

    return value
        .map((item) => asSingleLine(item, maxLength))
        .filter(Boolean)
        .slice(0, maxItems);
}

function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function ensureConfig() {
    const missing = [];

    if (!process.env.RESEND_API_KEY) {
        missing.push('RESEND_API_KEY');
    }

    if (!process.env.RESEND_FROM) {
        missing.push('RESEND_FROM');
    }

    if (configuredContactRecipients.length === 0) {
        missing.push('CONTACT_FORM_TO');
    }

    if (missing.length > 0) {
        const error = new Error(`Email service is not configured. Missing ${missing.join(', ')}.`);
        error.statusCode = 500;
        throw error;
    }
}

function buildFromAddress(fromValue) {
    return fromValue.includes('<') ? fromValue : `CoSama Learn <${fromValue}>`;
}

function getFromAddress() {
    return buildFromAddress(process.env.RESEND_FROM);
}

function getContactRecipients() {
    return configuredContactRecipients;
}

function buildContactNotificationText(submission) {
    return [
        'New CoSama Learn contact form submission',
        '',
        `Name: ${submission.name}`,
        `Company: ${submission.company}`,
        `Email: ${submission.email}`,
        `Role / Title: ${submission.role || 'Not provided'}`,
        `Company Size: ${submission.companySize || 'Not provided'}`,
        `Phone: ${submission.phone || 'Not provided'}`,
        `Interests: ${submission.interestsDisplay}`,
        `Preferred Contact Method: ${submission.contactMethod || 'Not provided'}`,
        '',
        'Situation:',
        submission.message || 'Not provided',
    ].join('\n');
}

function buildContactConfirmationText(submission) {
    return [
        `Hi ${submission.name},`,
        '',
        'Thanks for reaching out to CoSama Learn. We received your message and will follow up within one business day.',
        '',
        `Company: ${submission.company}`,
        `Interests: ${submission.interestsDisplay}`,
        '',
        'What you shared:',
        submission.message || 'No additional notes provided.',
    ].join('\n');
}

function buildInviteNotificationText(submission) {
    return [
        'New CoSama Learn invite request',
        '',
        `Email: ${submission.email}`,
        `CTA Title: ${submission.title || 'Not provided'}`,
        `Source: ${submission.source || 'Not provided'}`,
    ].join('\n');
}

function buildInviteConfirmationText(submission) {
    return [
        'Thanks for requesting an invite to CoSama Learn.',
        '',
        'We have your email and will follow up with next steps soon.',
        '',
        `Submitted email: ${submission.email}`,
    ].join('\n');
}

app.post('/api/contact', async (req, res) => {
    try {
        ensureConfig();

        const website = asSingleLine(req.body?.website, 200);

        if (website) {
            return res.status(200).json({ ok: true, confirmationSent: false });
        }

        const submission = {
            name: asSingleLine(req.body?.name, 120),
            company: asSingleLine(req.body?.company, 120),
            role: asSingleLine(req.body?.role, 120),
            companySize: asSingleLine(req.body?.companySize, 40),
            email: asSingleLine(req.body?.email, 160).toLowerCase(),
            phone: asSingleLine(req.body?.phone, 40),
            interests: asList(req.body?.interests),
            message: asMultiline(req.body?.message, 4000),
            contactMethod: asSingleLine(req.body?.contactMethod, 40),
        };

        if (!submission.name || !submission.company || !submission.email) {
            return res.status(400).json({
                ok: false,
                error: 'Please complete the required fields before submitting the form.',
            });
        }

        if (!isValidEmail(submission.email)) {
            return res.status(400).json({
                ok: false,
                error: 'Please enter a valid email address.',
            });
        }

        submission.interestsDisplay =
            submission.interests.length > 0 ? submission.interests.join(', ') : 'Not provided';

        const resend = new Resend(process.env.RESEND_API_KEY);
        const from = getFromAddress();
        const contactRecipients = getContactRecipients();

        const notificationResult = await resend.emails.send({
            from,
            replyTo: submission.email,
            subject: `New CoSama Learn contact request: ${submission.name}`,
            tags: [
                { name: 'source', value: 'website-contact' },
                { name: 'site', value: 'cosma-learn' },
            ],
            text: buildContactNotificationText(submission),
            to: contactRecipients,
            react: React.createElement(ContactNotificationEmail, { submission }),
        });

        if (notificationResult.error) {
            const error = new Error(
                notificationResult.error.message || 'Unable to send notification email.'
            );
            error.statusCode = notificationResult.error.statusCode || 500;
            throw error;
        }

        let confirmationSent = false;

        try {
            const confirmationResult = await resend.emails.send({
                from,
                replyTo: contactRecipients[0],
                subject: 'Thanks for contacting CoSama Learn',
                tags: [
                    { name: 'source', value: 'website-contact' },
                    { name: 'site', value: 'cosma-learn' },
                ],
                text: buildContactConfirmationText(submission),
                to: [submission.email],
                react: React.createElement(ContactConfirmationEmail, { submission }),
            });

            confirmationSent = !confirmationResult.error;

            if (confirmationResult.error) {
                console.error('Failed to send contact confirmation email:', confirmationResult.error);
            }
        } catch (error) {
            console.error('Failed to send contact confirmation email:', error);
        }

        return res.status(200).json({ ok: true, confirmationSent });
    } catch (error) {
        console.error('Contact form submission failed:', error);
        return res.status(error.statusCode || 500).json({
            ok: false,
            error:
                error instanceof Error
                    ? error.message
                    : 'Something went wrong while sending your message. Please try again in a minute.',
        });
    }
});

app.post('/api/invite', async (req, res) => {
    try {
        ensureConfig();

        const website = asSingleLine(req.body?.website, 200);

        if (website) {
            return res.status(200).json({ ok: true, confirmationSent: false });
        }

        const submission = {
            email: asSingleLine(req.body?.email, 160).toLowerCase(),
            source: asSingleLine(req.body?.source, 200),
            title: asSingleLine(req.body?.title, 160),
        };

        if (!submission.email) {
            return res.status(400).json({
                ok: false,
                error: 'Please enter your email address before submitting the form.',
            });
        }

        if (!isValidEmail(submission.email)) {
            return res.status(400).json({
                ok: false,
                error: 'Please enter a valid email address.',
            });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);
        const from = getFromAddress();
        const contactRecipients = getContactRecipients();

        const notificationResult = await resend.emails.send({
            from,
            replyTo: submission.email,
            subject: `New CoSama Learn invite request: ${submission.email}`,
            tags: [
                { name: 'source', value: 'website-invite' },
                { name: 'site', value: 'cosma-learn' },
            ],
            text: buildInviteNotificationText(submission),
            to: contactRecipients,
            react: React.createElement(InviteNotificationEmail, { submission }),
        });

        if (notificationResult.error) {
            const error = new Error(
                notificationResult.error.message || 'Unable to send invite notification email.'
            );
            error.statusCode = notificationResult.error.statusCode || 500;
            throw error;
        }

        let confirmationSent = false;

        try {
            const confirmationResult = await resend.emails.send({
                from,
                replyTo: contactRecipients[0],
                subject: "You're on the CoSama Learn invite list",
                tags: [
                    { name: 'source', value: 'website-invite' },
                    { name: 'site', value: 'cosma-learn' },
                ],
                text: buildInviteConfirmationText(submission),
                to: [submission.email],
                react: React.createElement(InviteConfirmationEmail, { submission }),
            });

            confirmationSent = !confirmationResult.error;

            if (confirmationResult.error) {
                console.error('Failed to send invite confirmation email:', confirmationResult.error);
            }
        } catch (error) {
            console.error('Failed to send invite confirmation email:', error);
        }

        return res.status(200).json({ ok: true, confirmationSent });
    } catch (error) {
        console.error('Invite form submission failed:', error);
        return res.status(error.statusCode || 500).json({
            ok: false,
            error:
                error instanceof Error
                    ? error.message
                    : 'Something went wrong while sending your request. Please try again in a minute.',
        });
    }
});

async function startServer() {
    if (isProduction) {
        app.use(express.static(distDir));
        app.use((req, res, next) => {
            if (req.method !== 'GET' && req.method !== 'HEAD') {
                next();
                return;
            }

            res.sendFile(path.join(distDir, 'index.html'));
        });
    } else {
        const { createServer: createViteServer } = await import('vite');
        const vite = await createViteServer({
            appType: 'custom',
            server: {
                middlewareMode: true,
                hmr: {
                    server: httpServer,
                },
            },
        });

        app.use(vite.middlewares);

        app.use(async (req, res, next) => {
            if (req.method !== 'GET' && req.method !== 'HEAD') {
                next();
                return;
            }

            try {
                const template = await fs.readFile(indexHtmlPath, 'utf8');
                const html = await vite.transformIndexHtml(req.originalUrl, template);

                res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
            } catch (error) {
                vite.ssrFixStacktrace(error);
                next(error);
            }
        });
    }

    httpServer.listen(port, host, () => {
        console.log(`CoSama Learn site listening on http://${host}:${port}`);
    });
}

if (!process.env.RESEND_API_KEY) {
    console.warn('WARNING: RESEND_API_KEY is not set. Form submissions will fail.');
}

if (!process.env.RESEND_FROM) {
    console.warn('WARNING: RESEND_FROM is not set. Form submissions will fail.');
}

if (configuredContactRecipients.length === 0) {
    console.warn('WARNING: CONTACT_FORM_TO is not set. Form submissions will fail.');
}

startServer().catch((error) => {
    console.error('Unable to start CoSama Learn site server:', error);
    process.exit(1);
});
