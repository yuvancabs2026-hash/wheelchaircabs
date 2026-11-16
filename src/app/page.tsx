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
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wheelchair Accessible Taxi Service in Bengaluru',
  description:
    'Book a wheelchair-accessible taxi in Bengaluru or Chennai for planned hospital visits, dialysis appointments, airport transfers, and everyday travel. Automatic hydraulic lift; non-emergency transport.',
  keywords: [
    'wheelchair taxi Bangalore',
    'wheelchair taxi Bengaluru',
    'wheelchair cab Bangalore',
    'wheelchair accessible taxi Bengaluru',
    'hydraulic lift taxi Bangalore',
    'hospital transport for wheelchair users',
    'wheelchair taxi for dialysis',
    'wheelchair cab for hospital appointments',
    'non-emergency hospital transport Bengaluru',
    'wheelchair taxi to hospital Bengaluru',
    'accessible airport taxi Bengaluru',
    'senior citizen wheelchair taxi',
    'wheelchair taxi Chennai',
  ],
  alternates: {
    canonical: 'https://wheelchaircabs.com',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'WheelchairCabs Bengaluru',
  description:
    'Wheelchair accessible taxi service in Bengaluru and Chennai. Safe, dignified, and hygienic travel for hospital visits, airport transfers, and city travel.',
  url: 'https://wheelchaircabs.com',
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
            <section
              className="bg-slate-50 py-16"
              aria-labelledby="accessible-trips-heading"
            >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                  <h2
                    id="accessible-trips-heading"
                    className="text-3xl font-display font-bold text-slate-900"
                  >
                    Wheelchair-accessible rides for planned hospital visits
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-slate-600">
                    Arrange a wheelchair taxi for a scheduled hospital appointment,
                    dialysis visit, airport transfer, or local journey in Bengaluru.
                    Share your route and wheelchair details so the team can confirm
                    vehicle suitability, availability, and fare. Chennai rides can
                    also be requested.
                  </p>
                  <p className="mt-4 text-slate-600">
                    WheelchairCabs provides planned, non-emergency transport, not
                    ambulance or medical-care services. For urgent medical needs,
                    contact emergency services.
                  </p>
                  <nav className="mt-8" aria-label="Wheelchair taxi service guides">
                    <h3 className="font-semibold text-slate-900">
                      Explore service areas and trip information
                    </h3>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/routes/manipal-hospital">Wheelchair taxi to Manipal Hospital</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/routes/fortis-hospital">Wheelchair taxi to Fortis Hospital</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/routes/narayana-health">Hospital transport to Narayana Health</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/routes/columbia-asia">Wheelchair taxi to Columbia Asia</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/chennai">Wheelchair taxi service in Chennai</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/services">All wheelchair taxi services</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/blog/hospital-transport-wheelchair-users-bangalore">Guide to planned hospital transport</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/blog/wheelchair-taxi-vs-regular-cab-ambulance">Wheelchair taxi vs. ambulance: when to choose</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/faq">Wheelchair taxi FAQs</Link></li>
                      <li><Link className="text-primary underline-offset-4 hover:underline" href="/booking">Enquire about a wheelchair taxi</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </section>
      <TestimonialCarousel data={data.testimonials} />
      <WheelchairTaxiDualVideo/>
      <WheelchairTaxiVideo/>
      <CTABanner data={data.cta} />
    </main>
  );
}
