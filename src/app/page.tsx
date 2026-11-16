import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import CTABanner from '@/components/CTABanner';
import { getHomePageData } from '@/lib/data';
import type { Metadata } from 'next';
import WheelchairTaxiVideo from '@/components/WheelchairTaxiVideo';
import PatientStoriesGallery from '@/components/PatientStoriesGallery';
import BookingNotice from '@/components/BookingNotice';
import WheelchairTaxiDualVideo from '@/components/WheelchairTaxiDualVideo';

export const metadata: Metadata = {
  title: 'Wheelchair Accessible Taxi Service in Bengaluru',
  description:
    'Book a wheelchair taxi in Bengaluru with an automatic hydraulic lift for hospital visits, airport transfers, and everyday travel. YuvanCabs also serves Chennai.',
  keywords: [
    'wheelchair taxi Bangalore',
    'wheelchair taxi Bengaluru',
    'wheelchair cab Bangalore',
    'wheelchair accessible taxi Bengaluru',
    'hydraulic lift taxi Bangalore',
    'hospital transport for wheelchair users',
    'wheelchair taxi for dialysis',
    'wheelchair cab for hospital appointments',
    'accessible airport taxi Bengaluru',
    'senior citizen wheelchair taxi',
    'wheelchair taxi Chennai',
  ],
  alternates: {
    canonical: 'https://yuvancabs.com',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'YuvanCabs Bengaluru',
  description:
    'Wheelchair accessible taxi service in Bengaluru and Chennai. Safe, dignified, and hygienic travel for hospital visits, airport transfers, and city travel.',
  url: 'https://yuvancabs.com',
  telephone: '+91-8105825544',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Bengaluru' },
    { '@type': 'City', name: 'Chennai' },
  ],
  priceRange: '₹₹',
  openingHours: 'Mo-Su 00:00-23:59',
  sameAs: [],
  additionalType: 'https://schema.org/MedicalTransport',
};

/**
 * Homepage — assembles all structural components.
 * Data is fetched via the data layer (CMS-ready).
 * SEO: H1 with primary keyword lives inside <Hero />.
 * Schema: LocalBusiness + TaxiService JSON-LD.
 */
export default function Home() {
  const data = getHomePageData();

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero data={data.hero} />
      <BookingNotice/>
            <PatientStoriesGallery/>

      <FeatureGrid data={data.features} />
      <TestimonialCarousel data={data.testimonials} />
      <WheelchairTaxiDualVideo/>
      <WheelchairTaxiVideo/>
      <CTABanner data={data.cta} />
    </main>
  );
}
