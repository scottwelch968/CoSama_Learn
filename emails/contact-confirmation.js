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
    summary: {
        backgroundColor: '#faf7f2',
        border: '1px solid #ece4d8',
        margin: '0 0 12px',
        padding: '16px 18px',
    },
    summaryLabel: {
        color: '#7a6b57',
        fontSize: '11px',
        fontWeight: '700',
        letterSpacing: '0.08em',
        margin: '0 0 6px',
        textTransform: 'uppercase',
    },
    summaryValue: {
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

function SummaryRow({ label, value }) {
    return element(
        Section,
        { style: styles.summary },
        element(Text, { style: styles.summaryLabel }, label),
        element(Text, { style: styles.summaryValue }, value || 'Not provided')
    );
}

export function ContactConfirmationEmail({ submission }) {
    return element(
        Html,
        { lang: 'en' },
        element(Head),
        element(Preview, null, 'Thanks for contacting CoSama Learn'),
        element(
            Body,
            { style: styles.body },
            element(
                Container,
                { style: styles.container },
                element(Text, { style: styles.kicker }, 'Thanks for reaching out'),
                element(Heading, { style: styles.heading }, `We got your note, ${submission.name}.`),
                element(
                    Text,
                    { style: styles.bodyText },
                    'A member of the CoSama Learn team will review your request and reply within one business day.'
                ),
                element(
                    Text,
                    { style: styles.bodyText },
                    'Here is a quick copy of the information you sent us.'
                ),
                element(SummaryRow, { label: 'Company', value: submission.company }),
                element(SummaryRow, { label: 'Interests', value: submission.interestsDisplay }),
                element(SummaryRow, { label: 'Situation', value: submission.message }),
                element(Hr, { style: { borderColor: '#ece4d8', margin: '24px 0' } }),
                element(
                    Text,
                    { style: styles.footer },
                    'If anything changes before we reply, you can answer this email and it will come straight back to the team.'
                )
            )
        )
    );
}

export default ContactConfirmationEmail;
