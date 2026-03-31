import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const initialState = {
    email: '',
    website: '',
};

export function InviteForm({ title, buttonLabel = 'Submit' }) {
    const location = useLocation();
    const honeypotId = `invite-website-${title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    const [formData, setFormData] = useState(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const [submissionResult, setSubmissionResult] = useState({
        confirmationSent: false,
        email: '',
        submitted: false,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((current) => ({
            ...current,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        try {
            let response;

            try {
                response = await fetch('/api/invite', {
                    body: JSON.stringify({
                        email: formData.email,
                        source: location.pathname,
                        title,
                        website: formData.website,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'POST',
                });
            } catch (error) {
                throw new Error(
                    import.meta.env.DEV
                        ? 'The invite API is unavailable. Start the app with npm run dev and reload the page.'
                        : 'We could not save your email right now. Please try again.'
                );
            }

            const contentType = response.headers.get('content-type') || '';
            const result = contentType.includes('application/json')
                ? await response.json().catch(() => ({}))
                : {};

            if (!response.ok || !result.ok) {
                throw new Error(
                    result.error ||
                        (import.meta.env.DEV && !contentType.includes('application/json')
                            ? 'The invite API is unavailable. Make sure you are running the full app with npm run dev, not Vite by itself.'
                            : 'We could not save your email right now. Please try again.')
                );
            }

            setSubmissionResult({
                confirmationSent: Boolean(result.confirmationSent),
                email: formData.email,
                submitted: true,
            });
            setFormData(initialState);
        } catch (error) {
            setSubmitError(
                error instanceof Error
                    ? error.message
                    : 'We could not save your email right now. Please try again.'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetSubmissionState = () => {
        setSubmissionResult({
            confirmationSent: false,
            email: '',
            submitted: false,
        });
        setSubmitError('');
    };

    if (submissionResult.submitted) {
        return (
            <div className="cta-band-success" aria-live="polite">
                <p className="cta-band-success__title">Thanks. Your invite request is in.</p>
                <p className="cta-band-success__text">
                    {submissionResult.confirmationSent
                        ? `We sent a confirmation to ${submissionResult.email}.`
                        : 'We saved your request and will follow up soon.'}
                </p>
                <button className="btn btn-secondary" onClick={resetSubmissionState} type="button">
                    Submit another email
                </button>
            </div>
        );
    }

    return (
        <>
            <form className="cta-band-form" onSubmit={handleSubmit}>
                <div className="contact-honeypot" aria-hidden="true">
                    <label htmlFor={honeypotId}>Website</label>
                    <input
                        autoComplete="off"
                        id={honeypotId}
                        name="website"
                        onChange={handleChange}
                        tabIndex={-1}
                        type="text"
                        value={formData.website}
                    />
                </div>
                <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="Enter your work email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                />
                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : buttonLabel}
                </button>
            </form>
            {submitError ? (
                <p className="form-status form-status--error" aria-live="assertive">
                    {submitError}
                </p>
            ) : (
                <p className="form-status">
                    We&apos;ll send a quick confirmation after your request is received.
                </p>
            )}
        </>
    );
}

export default function InviteCta({
    title,
    label = 'Grab an Invite Now!',
    subtitle = '',
    buttonLabel = 'Submit',
}) {
    return (
        <div className="cta-band-wrapper">
            <section className="cta-band reveal">
                <div className="section-label">{label}</div>
                <h2 className="section-title">{title}</h2>
                {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
                <InviteForm buttonLabel={buttonLabel} title={title} />
            </section>
        </div>
    );
}
