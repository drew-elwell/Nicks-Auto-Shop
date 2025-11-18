import Link from 'next/link';
import Header from '@/components/Header';
import ServicesGrid from '@/components/ServicesGrid';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { services } from '@/data/services';

export default function ServicesPage() {
  const featuredServices = services.slice(0, 3);

  const servicePackages = [
    {
      title: 'Maintenance & Fluids',
      description:
        'Keep factory warranties intact with scheduled oil changes, filter replacements, coolant and transmission service, and digital inspection reports.',
      items: ['Oil Change & Lube', 'Preventative Maintenance', 'Fluid Flushes'],
    },
    {
      title: 'Diagnostics & Repair',
      description:
        'Solve warning lights, drivability issues, and electrical problems using OEM-level scan tools, lab scopes, and years of local experience.',
      items: ['Engine Diagnostics', 'Electrical & Battery', 'Brake Repair'],
    },
    {
      title: 'Comfort & Performance',
      description:
        'Make every drive a good one with precise alignments, AC service, and exhaust work tailored to Colorado roads and emissions standards.',
      items: ['Wheel Alignment', 'Air Conditioning', 'Exhaust Systems'],
    },
  ];

  const processSteps = [
    {
      title: 'Listen & Inspect',
      detail:
        'We start with a road test (when appropriate), discuss your concerns, and capture photos during a 35-point inspection.',
    },
    {
      title: 'Diagnose & Quote',
      detail:
        'ASE-certified techs confirm the root cause, then send you a digital estimate with priority levels so you can make informed decisions.',
    },
    {
      title: 'Repair & Verify',
      detail:
        'Work is performed with OEM-quality parts, torque specs, and verification tests. We keep you updated via text throughout the repair.',
    },
    {
      title: 'Deliver & Support',
      detail:
        'You get a clean vehicle, detailed invoice, and nationwide warranty coverage. We follow up after a few days to make sure everything feels perfect.',
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <section className="bg-light-blue py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-orange font-semibold">
                Boulder’s Complete Shop Since 1977
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mt-4 mb-6">
                All-in-one auto care for every stage of vehicle ownership.
          </h1>
              <p className="text-lg text-text-gray leading-relaxed">
                Whether you need quick maintenance or in-depth diagnostics, our ASE-certified team
                pairs modern tooling with old-school honesty. Explore every service we provide and
                see how we keep Boulder drivers confident on the road.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="bg-orange text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-orange/90 transition-colors"
                >
                  Book an Appointment
                </Link>
                <a
                  href="tel:3034994300"
                  className="bg-white text-dark-blue px-8 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors border border-dark-blue/10"
                >
                  Call (303) 499-4300
                </a>
              </div>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { label: 'Same-Day Services', value: '70%' },
                { label: 'ASE-Certified Techs', value: '100%' },
                { label: 'Warranty Coverage', value: '24 mo / 24k mi' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl shadow-sm p-5 text-center">
                  <p className="text-3xl font-bold text-dark-blue">{stat.value}</p>
                  <p className="text-sm text-text-gray mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="uppercase tracking-widest text-sm text-orange font-semibold">
                Deep dives
              </p>
              <h2 className="text-3xl font-bold text-dark-blue mt-2">
                Featured services with detailed coverage
              </h2>
            </div>
            <Link
              href="#all-services"
              className="text-orange font-semibold hover:text-orange/80 transition-colors"
            >
              Skip to full menu →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {featuredServices.map((service) => (
              <div
                key={service.slug}
                className="border border-gray-100 rounded-2xl p-6 shadow-sm hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-light-blue rounded-xl p-3 text-orange">
                    <service.icon className="w-6 h-6" />
                  </span>
                  <h3 className="text-xl font-bold text-dark-blue">{service.title}</h3>
                </div>
                <p className="text-text-gray mb-5">{service.longDescription}</p>
                <ul className="space-y-3 text-sm text-dark-blue/80 mb-6">
                  {service.servicesOffered.slice(0, 3).map((item) => (
                    <li key={item} className="flex gap-2 items-start">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-orange font-semibold hover:text-orange/80 transition-colors"
                >
                  View everything included →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-dark-blue to-dark-blue/90 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-orange font-semibold">
              Ready when you are
            </p>
            <h2 className="text-3xl font-bold mt-3 mb-4">
              Need brakes, diagnostics, or fleet maintenance? We can get you on the schedule today.
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Same-day appointments are available for most services. Send us the details of your vehicle
              and we&apos;ll respond with a confirmed time plus a digital estimate.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact-us"
              className="bg-orange text-white px-8 py-3 rounded-lg font-semibold text-center hover:bg-orange/90 transition-colors flex-1"
            >
              Request an Estimate
            </Link>
            <Link
              href="#all-services"
              className="bg-white text-dark-blue px-8 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors flex-1"
            >
              Browse All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-dark-blue mb-10 text-center">
            Packages built for the way you drive
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {servicePackages.map((pkg) => (
              <div key={pkg.title} className="bg-white rounded-2xl p-6 shadow-sm border border-white/60">
                <h3 className="text-xl font-bold text-dark-blue mb-3">{pkg.title}</h3>
                <p className="text-text-gray mb-4">{pkg.description}</p>
                <div className="text-sm text-dark-blue/80">
                  <p className="font-semibold mb-2">Popular services:</p>
                  <ul className="space-y-1">
                    {pkg.items.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="uppercase tracking-widest text-sm text-orange font-semibold">
              Our repair process
            </p>
            <h2 className="text-3xl font-bold text-dark-blue mt-2">
              Transparent communication from drop-off to pick-up
            </h2>
          </div>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.title} className="flex gap-6">
                <div className="flex-shrink-0">
                  <span className="w-12 h-12 rounded-full border border-orange text-orange flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-blue mb-2">{step.title}</h3>
                  <p className="text-text-gray leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="all-services">
        <ServicesGrid />
      </div>

      <ContactSection />
      <Footer />
    </main>
  );
}

