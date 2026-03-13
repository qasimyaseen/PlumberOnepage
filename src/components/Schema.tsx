export default function Schema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "Hit The Switch - Melbourne Electricians",
    "alternateName": "Hit The Switch",
    "url": "https://hittheswitch.com.au",
    "logo": "https://hittheswitch.com.au/logo.png",
    "image": "https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4",
    "description": "Melbourne's trusted electrical experts since 2009. Emergency repairs, switchboard upgrades, and more across East & South-Eastern suburbs.",
    "telephone": "1300205205",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Melbourne",
      "addressRegion": "VIC",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -37.8136,
      "longitude": 144.9631
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Melbourne" },
      { "@type": "City", "name": "Box Hill" },
      { "@type": "City", "name": "Glen Waverley" },
      { "@type": "City", "name": "Doncaster" },
      { "@type": "City", "name": "Camberwell" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer emergency 24/7 electrical services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide emergency electrical repairs across Melbourne's East & South-Eastern suburbs 24 hours a day, 7 days a week."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a call-out normally cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer transparent fixed pricing and provide a FREE no-obligation quote before any work starts."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
