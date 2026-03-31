import React from 'react';
import { Body, Container, Head, Heading, Html, Preview, Section, Text } from '@react-email/components';

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
};

function DetailRow({ label, value }) {
    return element(
        Section,
        { style: styles.detailSection },
        element(Text, { style: styles.detailLabel }, label),
        element(Text, { style: styles.detailValue }, value || 'Not provided')
    );
}

export function InviteNotificationEmail({ submission }) {
    return element(
        Html,
        { lang: 'en' },
        element(Head),
        element(Preview, null, `New CoSama Learn invite request from ${submission.email}`),
        element(
            Body,
            { style: styles.body },
            element(
                Container,
                { style: styles.container },
                element(Text, { style: styles.kicker }, 'New invite request'),
                element(Heading, { style: styles.heading }, submission.email),
                element(
                    Text,
                    { style: styles.bodyText },
                    'A visitor submitted one of the CoSama Learn invite forms.'
                ),
                element(DetailRow, { label: 'Email', value: submission.email }),
                element(DetailRow, { label: 'CTA Title', value: submission.title }),
                element(DetailRow, { label: 'Source', value: submission.source })
            )
        )
    );
}

export default InviteNotificationEmail;
