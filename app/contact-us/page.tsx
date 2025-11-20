'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, MapPin, Clock } from 'lucide-react';
import { services } from '@/data/services';
import { BUSINESS_INFO } from '@/lib/constants';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual form submission (API route, email service, etc.)
    // For now, simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-dark-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Get in touch with us today. We&apos;re here to help with all your automotive needs.
          </p>
        </div>
      </div>

      <div className="py-16 bg-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Address</h3>
                    <p className="text-text-gray">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Phone</h3>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-text-gray hover:text-orange transition-colors"
                      aria-label={`Call ${BUSINESS_INFO.name} at ${BUSINESS_INFO.phone}`}
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-blue mb-1">Hours</h3>
                    <p className="text-text-gray">
                      {BUSINESS_INFO.hours.weekdaysFull}<br />
                      {BUSINESS_INFO.hours.weekendsFull}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={`https://www.google.com/maps?q=${BUSINESS_INFO.address.googleMaps}&output=embed`}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title={`${BUSINESS_INFO.name} Location - ${BUSINESS_INFO.address.full}`}
                  aria-label="Map showing business location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-dark-blue mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-dark-blue mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-dark-blue mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-dark-blue mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-dark-blue mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none"
                    aria-label="Select a service"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-dark-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange text-white px-8 py-4 rounded-lg hover:bg-orange/90 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Submit contact form"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

