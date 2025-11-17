import Link from 'next/link';
import { Phone, MapPin, Calendar } from 'lucide-react';

export default function ContactSection() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Ready to Schedule Your Service?
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Get in touch with us today — we&apos;re here to help keep your vehicle running smoothly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Call Us */}
          <div className="text-center p-6 bg-light-blue rounded-lg">
            <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Call Us</h3>
            <a href="tel:3034994300" className="text-dark-blue font-semibold text-lg hover:text-orange transition-colors block mb-2">
              (303) 499-4300
            </a>
            <p className="text-text-gray">Mon-Fri: 8:00 AM - 5:00 PM</p>
          </div>

          {/* Visit Us */}
          <div className="text-center p-6 bg-light-blue rounded-lg">
            <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Visit Us</h3>
            <p className="text-text-gray mb-3">
              2800 Moorhead Ave<br />
              Boulder, CO 80305
            </p>
            <a
              href="https://maps.google.com/?q=2800+Moorhead+Ave+Boulder+CO+80305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center space-x-1"
            >
              <span>Get Directions</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Book Online */}
          <div className="text-center p-6 bg-light-blue rounded-lg">
            <div className="w-16 h-16 bg-orange rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-dark-blue mb-2">Book Online</h3>
            <p className="text-text-gray mb-3">Schedule your appointment online 24/7</p>
            <Link
              href="/contact-us"
              className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center space-x-1"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=2800+Moorhead+Ave,+Boulder,+CO+80305&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full"
            title="Nick's Auto Repair Location - 2800 Moorhead Ave, Boulder, CO 80305"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

