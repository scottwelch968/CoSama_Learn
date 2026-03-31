import { Helmet } from 'react-helmet-async';

const SITE = 'Cosama AI';
const BASE_URL = 'https://learn.cosama.co';

export default function Seo({ title, description, path = '' }) {
  const fullTitle = title ? `${title} — ${SITE}` : `${SITE} — Coaching, Training & Consulting`;
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
