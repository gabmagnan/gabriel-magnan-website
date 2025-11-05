import Script from 'next/script';
import { type NextPage } from 'next';
import { generateStructuredData } from '@/lib/seo';

const Schema: NextPage = () => {
  const { personSchema, websiteSchema, organizationSchema } =
    generateStructuredData();

  // Combine all schemas into a graph
  const schemaGraph = {
    '@context': 'https://schema.org',
    '@graph': [personSchema, websiteSchema, organizationSchema],
  };

  return (
    <>
      <Script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
        id="schema-graph"
        type="application/ld+json"
      />
    </>
  );
};

export default Schema;
