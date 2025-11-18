import Link from 'next/link';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';
import Logo from './Logo';
import { services } from '@/data/services';

export default function Footer() {
  return (
    <footer className="bg-[#071E3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Trusted auto repair in Boulder, CO since 1977. Family-owned, ASE-certified, and committed to honest service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-orange transition-colors">Home</Link></li>
              <li><Link href="/about-us" className="text-gray-300 hover:text-orange transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-orange transition-colors">Services</Link></li>
              <li><Link href="/contact-us" className="text-gray-300 hover:text-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-300 hover:text-orange transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  2800 Moorhead Ave<br />
                  Boulder, CO 80305
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-orange flex-shrink-0" />
                <a href="tel:3034994300" className="text-gray-300 hover:text-orange transition-colors">(303) 499-4300</a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-orange flex-shrink-0" />
                <span className="text-gray-300">Mon-Fri: 8AM - 5PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2025 Nick&apos;s Auto Repair - All Rights Reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/contact-us" className="text-gray-300 hover:text-orange transition-colors text-sm">Contact</Link>
            <Link href="/testimonials" className="text-gray-300 hover:text-orange transition-colors text-sm">Testimonials</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

