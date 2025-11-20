import type { Metadata } from 'next';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: `About Us | ${BUSINESS_INFO.name}`,
  description:
    `Learn about ${BUSINESS_INFO.name}, Boulder's trusted auto repair shop since ${BUSINESS_INFO.founded}. Family-owned, ASE-certified, and committed to honest service.`,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

