import Link from 'next/link';
import { Phone } from 'lucide-react';

export default function CTA() {
  return (
    <div className="bg-dark-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-4">
          <svg className="w-12 h-12 text-orange mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-orange font-semibold mb-2">Boulder&apos;s Trusted Auto Repair Team</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Safe on the Road — Trust Your Vehicle with Boulder&apos;s Trusted Auto Repair Team
        </h2>
        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          47+ years of expert service, honest pricing, and a commitment to your safety
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us"
            className="bg-orange px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors font-semibold inline-flex items-center justify-center"
          >
            Schedule Your Service
          </Link>
          <a
            href="tel:3034994300"
            className="bg-white text-dark-blue px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>(303) 499-4300</span>
          </a>
        </div>
      </div>
    </div>
  );
}

