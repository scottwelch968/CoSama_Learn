import React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';

const element = React.createElement;

const styles = {
    body: {
        backgroundColor: '#f5f1ea',
        color: '#101010',
        fontFamily: 'Arial, sans-serif',
        margin: 0,
        padding: '32px 0',
    },
    container: {
        backgroundColor: '#ffffff',
        border: '1px solid #ded7cd',
        margin: '0 auto',
        maxWidth: '640px',
        padding: '32px',
    },
    kicker: {
        color: '#a64b20',
        fontSize: '12px',
        fontWeight: '700',
        letterSpacing: '0.12em',
        margin: '0 0 12px',
        textTransform: 'uppercase',
    },
    heading: {
        color: '#101010',
        fontSize: '28px',
        lineHeight: '34px',
        margin: '0 0 12px',
    },
    bodyText: {
        color: '#3c3c3c',
        fontSize: '15px',
        lineHeight: '24px',
        margin: '0 0 16px',
    },
    detailSection: {
        backgroundColor: '#faf7f2',
        border: '1px solid #ece4d8',
        margin: '0 0 12px',
        padding: '16px 18px',
    },
    detailLabel: {
        color: '#7a6b57',
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.08em',
        margin: '0 0 6px',
        textTransform: 'uppercase',
    },
    detailValue: {
        color: '#101010',
        fontSize: '15px',
        lineHeight: '24px',
        margin: 0,
        whiteSpace: 'pre-wrap',
    },
    footer: {
        color: '#7a6b57',
        fontSize: '12px',
        lineHeight: '20px',
        margin: '16px 0 0',
    },
};

function DetailRow({ label, value }) {
    return element(
        Section,
        { style: styles.detailSection },
        element(Text, { style: styles.detailLabel }, label),
        element(Text, { style: styles.detailValue }, value || 'Not provided')
    );
}

export function ContactNotificationEmail({ submission }) {
    return element(
        Html,
        { lang: 'en' },
        element(Head),
        element(Preview, null, `New CoSama Learn contact request from ${submission.name}`),
        element(
            Body,
            { style: styles.body },
            element(
                Container,
                { style: styles.container },
                element(Text, { style: styles.kicker }, 'New website contact request'),
                element(Heading, { style: styles.heading }, submission.name),
                element(
                    Text,
                    { style: styles.bodyText },
                    'A visitor submitted the CoSama Learn contact form and is waiting for a follow-up.'
                ),
                element(DetailRow, { label: 'Email', value: submission.email }),
                element(DetailRow, { label: 'Company', value: submission.company }),
                element(DetailRow, { label: 'Role / Title', value: submission.role }),
                element(DetailRow, { label: 'Company Size', value: submission.companySize }),
                element(DetailRow, { label: 'Phone', value: submission.phone }),
                element(DetailRow, { label: 'Interests', value: submission.interestsDisplay }),
                element(DetailRow, {
                    label: 'Preferred Contact Method',
                    value: submission.contactMethod,
                }),
                element(DetailRow, { label: 'Situation', value: submission.message }),
                element(Hr, { style: { borderColor: '#ece4d8', margin: '24px 0' } }),
                element(
                    Text,
                    { style: styles.footer },
                    'Replies will go directly to the submitter email address.'
                )
            )
        )
    );
}

export default ContactNotificationEmail;
