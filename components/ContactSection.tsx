'use client';

import Link from 'next/link';
import { Phone, MapPin, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import AnimatedSection from './AnimatedSection';
import StaggerContainer, { StaggerItem } from './StaggerContainer';

export default function ContactSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Get in touch with us today — we&apos;re here to help keep your vehicle running smoothly
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Call Us */}
          <StaggerItem>
            <div className="text-center p-6 bg-light-blue rounded-lg h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Call Us</h3>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-dark-blue font-semibold text-lg hover:text-orange transition-colors block mb-2"
                aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
              >
                {BUSINESS_INFO.phone}
              </a>
              <p className="text-text-gray">{BUSINESS_INFO.hours.weekdaysFull}</p>
            </div>
          </StaggerItem>

          {/* Visit Us */}
          <StaggerItem>
            <div className="text-center p-6 bg-light-blue rounded-lg h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Visit Us</h3>
              <p className="text-text-gray mb-3">
                {BUSINESS_INFO.address.street}<br />
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
              </p>
              <a
                href={`https://maps.google.com/?q=${BUSINESS_INFO.address.googleMaps}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center space-x-1"
                aria-label="Get directions to our location"
              >
                <span>Get Directions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </StaggerItem>

          {/* Book Online */}
          <StaggerItem>
            <div className="text-center p-6 bg-light-blue rounded-lg h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-blue mb-2">Book Online</h3>
              <p className="text-text-gray mb-3">Schedule your appointment online 24/7</p>
              <Link
                href="/contact-us"
                className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center space-x-1"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Map */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps?q=${BUSINESS_INFO.address.googleMaps}&output=embed`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
              title={`${BUSINESS_INFO.name} Location - ${BUSINESS_INFO.address.full}`}
              aria-label="Map showing business location"
            ></iframe>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

