import React from 'react';
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';

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
};

export function InviteConfirmationEmail({ submission }) {
    return element(
        Html,
        { lang: 'en' },
        element(Head),
        element(Preview, null, "You're on the CoSama Learn invite list"),
        element(
            Body,
            { style: styles.body },
            element(
                Container,
                { style: styles.container },
                element(Text, { style: styles.kicker }, 'Invite request received'),
                element(Heading, { style: styles.heading }, "You're on the list."),
                element(
                    Text,
                    { style: styles.bodyText },
                    'Thanks for your interest in CoSama Learn. We received your request and will follow up soon with the next step.'
                ),
                element(
                    Text,
                    { style: styles.bodyText },
                    `We recorded this email address: ${submission.email}`
                )
            )
        )
    );
}

export default InviteConfirmationEmail;
