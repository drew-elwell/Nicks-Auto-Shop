'use client';

import Link from 'next/link';
import { useState } from 'react';
import { services } from '@/data/services';
import { FEATURED_SERVICES_COUNT } from '@/lib/constants';
import AnimatedSection from './AnimatedSection';
import StaggerContainer, { StaggerItem } from './StaggerContainer';

export default function ServicesGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, FEATURED_SERVICES_COUNT);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Our Complete Service Menu
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Expert care for every aspect of your vehicle
          </p>
        </AnimatedSection>

        <StaggerContainer key={showAll ? 'all' : 'featured'} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <StaggerItem key={service.slug}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full hover:-translate-y-1">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-blue mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-gray mb-4 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center space-x-1"
                  >
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {services.length > FEATURED_SERVICES_COUNT && (
          <div className="mt-10 text-center">
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="inline-flex items-center justify-center bg-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-blue/90 transition-all duration-300 hover:scale-105"
                aria-label="Show all services"
              >
                See the rest of our services
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                className="inline-flex items-center justify-center bg-dark-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-dark-blue/90 transition-all duration-300 hover:scale-105"
                aria-label="Hide extra services"
              >
                Show fewer services
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

