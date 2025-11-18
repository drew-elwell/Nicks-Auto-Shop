import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { getServiceBySlug, services } from '@/data/services';
import { notFound } from 'next/navigation';

type ServicePageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = service.icon;

  return (
    <main className="min-h-screen bg-light-blue">
      <Header />

      <section className="bg-dark-blue text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-xl bg-orange/90 flex items-center justify-center">
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="uppercase tracking-widest text-sm text-orange/80 mb-1">
                Service Detail
              </p>
              <h1 className="text-3xl md:text-5xl font-bold">{service.title}</h1>
            </div>
          </div>
          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            {service.longDescription}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">What&apos;s Included</h2>
              <p className="text-text-gray mb-6">
                Every {service.title.toLowerCase()} visit includes the following professional
                services and inspections:
              </p>
              <ul className="space-y-3">
                {service.servicesOffered.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-orange" />
                    <span className="text-text-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-dark-blue mb-4">Why It Matters</h2>
              <p className="text-text-gray mb-6">
                Staying on top of this service protects your safety, comfort, and long-term repair
                budget.
              </p>
              <ul className="space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-dark-blue" />
                    <span className="text-text-gray leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-dark-blue mb-4">Typical Timeline</h3>
            <p className="text-text-gray text-lg leading-relaxed">{service.turnaround}</p>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  );
}

