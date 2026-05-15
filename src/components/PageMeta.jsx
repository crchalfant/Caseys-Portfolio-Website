import { Helmet } from 'react-helmet-async';

export default function PageMeta({ title, description }) {
  const fullTitle = title
    ? `${title} | Casey Chalfant`
    : 'Casey Chalfant | Senior Product Manager | Fintech & Digital Banking';

  const desc = description || 'Senior PM with 12+ years in fintech and digital banking. Based in Raleigh, NC. Available for remote and Raleigh-area roles.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
}
