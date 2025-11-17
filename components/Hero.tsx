import Link from 'next/link';
import { Phone, Check } from 'lucide-react';

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
  badgeText = "Serving Boulder Since 1977",
  ctaText = "Contact Us",
  ctaLink = "/contact-us",
  showFeatures = false
}: HeroProps) {
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
          <div className="mb-6 inline-flex items-center space-x-2 bg-orange px-4 py-2 rounded-lg">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold">{badgeText}</span>
          </div>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link 
            href={ctaLink}
            className="bg-orange px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors font-semibold text-center"
          >
            {ctaText}
          </Link>
          <a 
            href="tel:3034994300"
            className="bg-white text-dark-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>(303) 499-4300</span>
          </a>
        </div>

        {/* Feature Badges */}
        {showFeatures && (
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange rounded flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">ASE-Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange rounded flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">Family-Owned</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange rounded flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium">47+ Years Experience</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

