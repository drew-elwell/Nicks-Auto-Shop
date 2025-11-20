import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ServicesGrid from '@/components/ServicesGrid';
import ContactSection from '@/components/ContactSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Trusted Auto Repair in Boulder, CO`,
  description:
    `Family-owned auto repair shop in Boulder, CO since ${BUSINESS_INFO.founded}. ASE-certified technicians providing honest, professional service for all foreign & domestic vehicles.`,
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero
        title="Trusted Auto Repair You Can Count On"
        subtitle="ASE-certified technicians delivering honest, professional service for all foreign & domestic vehicles. Family-owned, Boulder-trusted."
        showBadge={true}
        badgeText={`Serving Boulder Since ${BUSINESS_INFO.founded}`}
        ctaText="Contact Us"
        ctaLink="/contact-us"
        showFeatures={true}
      />
      <AboutSection />
      <ServicesGrid />
      <ContactSection />
      <CTA />
      <Footer />
    </main>
  );
}

