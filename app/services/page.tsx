import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-light-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-blue mb-4">
            Complete Auto Services
          </h1>
          <p className="text-lg md:text-xl text-text-gray max-w-2xl mx-auto">
            From routine maintenance to major repairs, our ASE-certified technicians handle it all with precision and care.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <ContactSection />
      <Footer />
    </main>
  );
}

