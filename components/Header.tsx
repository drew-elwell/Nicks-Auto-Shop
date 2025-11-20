'use client';

import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { BUSINESS_INFO, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#071E3D] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="Home">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-dark-blue bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/contact-us"
              className="bg-orange px-6 py-2 rounded-lg hover:bg-orange/90 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#071E3D] border-t border-white/20">
          <nav className="px-4 py-4 space-y-4" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block hover:text-orange transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center space-x-2 text-dark-blue bg-white px-4 py-2 rounded-lg mt-4"
              aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">{BUSINESS_INFO.phone}</span>
            </a>
            <Link
              href="/contact-us"
              className="block bg-orange px-6 py-2 rounded-lg text-center font-semibold mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

