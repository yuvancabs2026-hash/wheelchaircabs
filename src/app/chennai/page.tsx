import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import CTABanner from '@/components/CTABanner';
import HeroBookingForm from '@/components/HeroBookingForm';
import { getBookingPageData } from '@/lib/data';

export const metadata: Metadata = {
    title: 'Wheelchair Taxi in Chennai | Accessible Cabs for Hospital Trips',
    description:
        'Book a wheelchair-accessible taxi in Chennai for hospital appointments, dialysis visits, airport transfers, and everyday travel. Contact WheelchairCabs to plan your ride.',
    keywords: [
        'wheelchair taxi Chennai',
        'wheelchair cab Chennai',
        'accessible taxi Chennai',
        'wheelchair accessible cab Chennai',
        'taxi for wheelchair users Chennai',
        'wheelchair van Chennai',
        'disabled-friendly taxi Chennai',
        'hospital taxi for wheelchair users Chennai',
        'dialysis transport Chennai',
        'wheelchair cab for hospital visit',
        'accessible medical transport Chennai',
        'wheelchair taxi to Apollo Hospital Chennai',
        'wheelchair taxi to MIOT Chennai',
        'wheelchair taxi to Kauvery Hospital Chennai',
        'wheelchair airport taxi Chennai',
        'Chennai airport wheelchair cab',
        'wheelchair taxi to Chennai Central',
        'wheelchair taxi to Egmore station',
        'senior citizen taxi Chennai',
        'mobility assistance cab Chennai',
    ],
    alternates: {
        canonical: 'https://wheelchaircabs.com/chennai',
    },
    openGraph: {
        title: 'Wheelchair Taxi in Chennai | WheelchairCabs',
        description:
            'Accessible taxi rides in Chennai for hospital appointments, regular treatments, airport journeys, and more.',
        url: 'https://wheelchaircabs.com/chennai',
        type: 'website',
    },
};

const faqs = [
    {
        question: 'Can I book a wheelchair taxi in Chennai for a hospital visit?',
        answer:
            'Yes. Contact WheelchairCabs with your pickup point, hospital, appointment time, and return-trip needs so the team can confirm availability and plan the ride.',
    },
    {
        question: 'Can I arrange a wheelchair cab for dialysis or recurring treatment?',
        answer:
            'Ask the booking team about recurring rides and preferred time slots. Share the treatment schedule in advance so availability and the return journey can be discussed.',
    },
    {
        question: 'Which Chennai hospitals can I travel to?',
        answer:
            'You can request a ride to your chosen hospital or clinic in Chennai. When enquiring, provide the exact entrance or drop-off point; WheelchairCabs is not affiliated with any hospital.',
    },
    {
        question: 'Can a family member or caregiver travel with me?',
        answer:
            'Tell the booking team how many companions will travel and what mobility equipment you use. They can confirm the seating arrangement for the specific vehicle and trip.',
    },
    {
        question: 'Will my wheelchair fit in the vehicle?',
        answer:
            'Wheelchairs vary in width, weight, and configuration. Share your wheelchair type and measurements when booking so the team can check vehicle suitability before confirming.',
    },
    {
        question: 'Can I book a Chennai airport or railway-station transfer?',
        answer:
            'Airport and station transfers can be requested. Share your flight or train details, terminal or station entrance, luggage needs, and pickup time to plan the trip.',
    },
    {
        question: 'Do you serve areas such as OMR, Velachery, Tambaram, and Anna Nagar?',
        answer:
            'Trips across Chennai can be requested, including pickups in neighbourhoods such as OMR, Velachery, Tambaram, and Anna Nagar. Confirm your exact pickup and destination when you enquire.',
    },
    {
        question: 'How much does a wheelchair taxi in Chennai cost?',
        answer:
            'The fare depends on the route, trip duration, waiting time, and other trip details. Contact WheelchairCabs with your itinerary to request a quote before booking.',
    },
    {
        question: 'How far in advance should I book?',
        answer:
            'Advance booking is recommended, especially for medical appointments and airport transfers. Contact the team as early as possible to check your preferred time.',
    },
    {
        question: 'Is this an ambulance or emergency medical transport?',
        answer:
            'No. A wheelchair taxi is for planned, non-emergency travel and does not provide medical monitoring or emergency care. Call local emergency services if urgent medical support is required.',
    },
];

const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'Service',
            name: 'Wheelchair-accessible taxi service in Chennai',
            serviceType: 'Wheelchair-accessible taxi transportation',
            description:
                'Pre-bookable wheelchair-accessible taxi rides in Chennai for planned hospital appointments, airport transfers, and everyday journeys.',
            provider: {
                '@type': 'Organization',
                name: 'WheelchairCabs',
                url: 'https://wheelchaircabs.com',
                telephone: '+91-8105825544',
            },
            areaServed: {
                '@type': 'City',
                name: 'Chennai',
            },
            url: 'https://wheelchaircabs.com/chennai',
        },
        {
            '@type': 'FAQPage',
            mainEntity: faqs.map(({ question, answer }) => ({
                '@type': 'Question',
                name: question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: answer,
                },
            })),
        },
    ],
};

export default function ChennaiPage() {
    const bookingData = getBookingPageData();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <main className="pt-24 lg:pt-32">
                <Breadcrumbs
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Wheelchair Taxi in Chennai' },
                    ]}
                />

                <section className="relative overflow-hidden border-b border-brand-cyan/10 bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-12 lg:py-16">
                    <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
                    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                        <div>
                            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-teal shadow-sm">
                                <span className="material-symbols-outlined text-base">accessible_forward</span>
                                Wheelchair-accessible rides in Chennai
                            </span>
                            <h1 className="text-4xl font-display font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                                Wheelchair Taxi
                                <span className="mt-1 block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                    in Chennai
                                </span>
                            </h1>
                            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                                Plan a comfortable cab journey for hospital appointments, dialysis visits,
                                airport transfers, and everyday travel—with boarding arrangements discussed
                                before your ride is confirmed.
                            </p>
                            <div className="mt-7 flex flex-wrap gap-3">
                                {['Hospital visits', 'Dialysis & treatment', 'Airport transfers', 'Everyday trips'].map((highlight) => (
                                    <span key={highlight} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
                                        {highlight}
                                    </span>
                                ))}
                            </div>
                            <p className="mt-6 text-sm leading-relaxed text-slate-500">
                                Planned, non-emergency transport. Share your wheelchair details and route so
                                the team can confirm vehicle fit, availability, and fare.
                            </p>
                        </div>
                        <div className="w-full">
                            <HeroBookingForm />
                        </div>
                    </div>
                </section>

                <section className="py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-5">
                            Accessible cabs for planned trips around Chennai
                        </h2>
                        <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
                            <p>
                                Finding a suitable wheelchair taxi in Chennai can take extra planning.
                                Standard cabs may not have a step-free way to board or room for a wheelchair,
                                and arranging a lift from a car can be difficult for both the passenger and
                                caregiver. WheelchairCabs offers wheelchair-accessible taxi bookings for planned
                                journeys, with an automatic hydraulic lift for boarding.
                            </p>
                            <p>
                                Whether you need a cab for a doctor visit, a wheelchair taxi for dialysis,
                                a clinic appointment, a hospital discharge journey, or a family outing, share
                                your needs when you enquire. Confirm the vehicle is suitable for your wheelchair
                                and travelling companions before the ride is finalized.
                            </p>
                            <p>
                                This is pre-booked, non-emergency transport—not an ambulance or medical-care
                                service. If a passenger needs medical monitoring, oxygen support, or urgent care
                                during travel, arrange an appropriate medical transport service instead.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-12 bg-slate-50" aria-labelledby="chennai-trip-types">
                    <div className="max-w-6xl mx-auto px-4">
                        <h2 id="chennai-trip-types" className="text-3xl font-bold text-slate-900 mb-8 text-center">
                            Chennai wheelchair cab journeys
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: 'Hospital and clinic appointments',
                                    text: 'Plan a wheelchair taxi to a hospital, specialist clinic, diagnostic centre, or rehabilitation appointment. Share the correct entrance and appointment time when booking.',
                                },
                                {
                                    title: 'Dialysis and recurring treatment',
                                    text: 'For regular dialysis, physiotherapy, or other scheduled treatment, ask about repeat bookings and return-trip arrangements so each journey can be planned ahead.',
                                },
                                {
                                    title: 'Airport and railway transfers',
                                    text: 'Request accessible transport to Chennai International Airport, Chennai Central, or Egmore. Allow time for traffic, boarding, luggage, and terminal or station access.',
                                },
                                {
                                    title: 'Family visits and everyday outings',
                                    text: 'A wheelchair-friendly cab can also help with planned family visits, local errands, social events, and other journeys where step-free boarding matters.',
                                },
                            ].map((trip) => (
                                <article key={trip.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{trip.title}</h3>
                                    <p className="text-slate-600 leading-relaxed">{trip.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-5">
                            Hospital trips and care visits in Chennai
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-5">
                            When arranging a hospital taxi, provide the hospital name, department or entrance,
                            appointment time, pickup address, and whether you need a return journey or waiting
                            time. You can ask about trips to Chennai hospitals and healthcare centres such as
                            Apollo Hospitals, MIOT International, Kauvery Hospital, MGM Healthcare, Fortis
                            Malar Hospital, and other destinations. These are example destinations only;
                            WheelchairCabs is not affiliated with or endorsed by any hospital.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            For dialysis transport, chemotherapy visits, physiotherapy, post-operative follow-up,
                            or a planned discharge, confirm the vehicle, boarding arrangements, and timing with
                            the booking team. A family member or caregiver should share any assistance needs
                            before the trip.
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-brand-cyan/5" aria-labelledby="chennai-areas">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 id="chennai-areas" className="text-3xl font-bold text-slate-900 mb-5">
                            Wheelchair taxi pickups across Chennai
                        </h2>
                        <p className="text-lg text-slate-700 leading-relaxed mb-5">
                            Enquire about accessible cab pickups and drop-offs in your part of Chennai,
                            including Adyar, Anna Nagar, Ashok Nagar, Chromepet, Guindy, Nungambakkam,
                            OMR, Perambur, Porur, Tambaram, T. Nagar, and Velachery. Share the exact address
                            rather than only the neighbourhood name; pickup distance, traffic, and vehicle
                            availability can affect whether a particular trip can be confirmed.
                        </p>
                        <p className="text-lg text-slate-700 leading-relaxed">
                            Need a wheelchair van or taxi beyond the city? Contact the team with your full
                            route and date to check whether the requested journey can be arranged.
                        </p>
                    </div>
                </section>

                <section className="py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-slate-900 mb-5">
                            What to share when you book an accessible taxi
                        </h2>
                        <ol className="list-decimal pl-6 space-y-3 text-lg text-slate-700 leading-relaxed">
                            <li>Your pickup address, destination, and preferred pickup time.</li>
                            <li>Your wheelchair type and size, plus any boarding or transfer requirements.</li>
                            <li>How many caregivers or family members will travel and any luggage to carry.</li>
                            <li>Whether you need a one-way ride, a return trip, or waiting between appointments.</li>
                            <li>For airport or station trips, your flight or train details and arrival terminal.</li>
                        </ol>
                        <p className="text-lg text-slate-700 leading-relaxed mt-5">
                            Ask for the fare and availability before confirming. For more details about accessible
                            transport, read our{' '}
                            <Link className="text-brand-teal underline" href="/blog/wheelchair-taxi-vs-regular-cab-ambulance">
                                guide to wheelchair taxis, regular cabs, and ambulances
                            </Link>{' '}
                            or browse our <Link className="text-brand-teal underline" href="/faq">frequently asked questions</Link>.
                            You can also view our <Link className="text-brand-teal underline" href="/routes/chennai">Chennai service-area route page</Link>.
                        </p>
                    </div>
                </section>

                <section className="py-12 bg-slate-50" aria-labelledby="chennai-faqs">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 id="chennai-faqs" className="text-3xl font-bold text-slate-900 mb-8">
                            Chennai wheelchair taxi FAQs
                        </h2>
                        <div className="space-y-6">
                            {faqs.map(({ question, answer }) => (
                                <article key={question} className="bg-white rounded-xl border border-slate-200 p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{question}</h3>
                                    <p className="text-slate-600 leading-relaxed">{answer}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-12 lg:py-16">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">
                            Plan your Chennai wheelchair cab ride
                        </h2>
                        <p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Call WheelchairCabs at <a className="text-brand-teal font-semibold" href="tel:+918105825544">+91 81058 25544</a> or
                            send your trip details through the booking page. Confirm your route, vehicle fit,
                            fare, and availability with the team before travel.
                        </p>
                        <Link
                            href="/booking"
                            className="inline-flex px-6 py-3 rounded-xl bg-brand-teal text-white font-semibold hover:bg-brand-cyan transition-colors"
                        >
                            Enquire about a Chennai ride
                        </Link>
                    </div>
                </section>

                <CTABanner data={bookingData.cta} />
            </main>
        </>
    );
}
