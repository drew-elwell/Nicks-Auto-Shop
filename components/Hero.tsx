'use client';

import Link from 'next/link';
import { Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO } from '@/lib/constants';

interface HeroProps {
  title: string;
  subtitle?: string;
  showBadge?: boolean;
  badgeText?: string;
  ctaText?: string;
  ctaLink?: string;
  showFeatures?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  showBadge = false, 
  badgeText = `Serving Boulder Since ${BUSINESS_INFO.founded}`,
  ctaText = "Contact Us",
  ctaLink = "/contact-us",
  showFeatures = false
}: HeroProps) {
  const yearsExperience = new Date().getFullYear() - BUSINESS_INFO.founded;

  return (
    <div className="relative bg-dark-blue text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2070')",
          }}
        >
          <div className="absolute inset-0 bg-dark-blue/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        {showBadge && (
          <motion.div 
            className="mb-6 inline-flex items-center space-x-2 bg-orange px-4 py-2 rounded-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold">{badgeText}</span>
          </motion.div>
        )}

        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <Link 
            href={ctaLink}
            className="bg-orange px-8 py-4 rounded-lg hover:bg-orange/90 transition-all duration-300 hover:scale-105 font-semibold text-center"
          >
            {ctaText}
          </Link>
          <a 
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="bg-white text-dark-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-semibold flex items-center justify-center space-x-2"
            aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
          >
            <Phone className="w-5 h-5" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
        </motion.div>

        {/* Feature Badges */}
        {showFeatures && (
          <motion.div 
            className="flex flex-wrap gap-6" 
            role="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2" 
              role="listitem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <div className="w-6 h-6 bg-orange rounded flex items-center justify-center" aria-hidden="true">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">ASE-Certified</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2" 
              role="listitem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="w-6 h-6 bg-orange rounded flex items-center justify-center" aria-hidden="true">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Family-Owned</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2" 
              role="listitem"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="w-6 h-6 bg-orange rounded flex items-center justify-center" aria-hidden="true">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">{yearsExperience}+ Years Experience</span>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

