'use client';

import Link from 'next/link';
import { Award, Car, Handshake } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import AnimatedSection from './AnimatedSection';

const features = [
  {
    icon: Award,
    title: "ASE-Certified Technicians",
    description: "Our expert mechanics are trained and certified to handle all your automotive needs with precision.",
  },
  {
    icon: Car,
    title: "All Makes & Models",
    description: "Full service on both foreign and domestic vehicles, from routine maintenance to complex repairs.",
  },
  {
    icon: Handshake,
    title: "Honest & Transparent",
    description: "Clean, professional shop with a personal touch. We treat your vehicle like it's our own.",
  },
];

export default function AboutSection() {
  const yearsExperience = new Date().getFullYear() - BUSINESS_INFO.founded;

  return (
    <div className="py-16 bg-light-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <AnimatedSection direction="left">
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <div 
                  className="w-full h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070')",
                  }}
                >
                  <div className="absolute inset-0 bg-dark-blue/20"></div>
                </div>
                {/* Badge Overlay */}
                <div className="absolute bottom-6 right-6 bg-orange px-6 py-4 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold text-white">{yearsExperience}+</div>
                  <div className="text-sm text-white font-medium">Years Serving Boulder</div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column - Content */}
          <AnimatedSection direction="right">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-6">
                Why Boulder Trusts {BUSINESS_INFO.name}
              </h2>
              <p className="text-lg text-text-gray mb-8 leading-relaxed">
                Since {BUSINESS_INFO.founded}, {BUSINESS_INFO.name} has been providing quality car care in Boulder, CO. We&apos;re a family-owned business delivering honest and professional automotive repair and maintenance services to the people of Boulder and surrounding areas.
              </p>

              {/* Features */}
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <AnimatedSection key={index} delay={index * 0.1} direction="up">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-dark-blue mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-text-gray leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>

              <Link
                href="/about-us"
                className="inline-block bg-dark-blue text-white px-8 py-3 rounded-lg hover:bg-dark-blue/90 transition-colors font-semibold"
              >
                Learn More About Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}

