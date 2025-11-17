import Link from 'next/link';
import { 
  Wrench, 
  Droplet, 
  Settings, 
  Gauge, 
  Battery, 
  Car, 
  Wind, 
  Wrench as WrenchIcon 
} from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: "Brake Repair",
    description: "Full brake service including pads, rotors, hydraulics, and complete system diagnostics for safe stopping power.",
  },
  {
    icon: Droplet,
    title: "Oil Change & Lube",
    description: "Fast, reliable oil and filter changes with fluid top-off to keep your engine running smoothly.",
  },
  {
    icon: Car,
    title: "Wheel Alignment",
    description: "Precision alignment services for improved ride comfort, handling, and extended tire life.",
  },
  {
    icon: Battery,
    title: "Engine Diagnostics",
    description: "Advanced computer diagnostics and expert repairs for major and minor engine issues.",
  },
  {
    icon: Wind,
    title: "Air Conditioning",
    description: "Complete AC diagnostics, recharge, and repair services to keep you cool in Colorado summers.",
  },
  {
    icon: Settings,
    title: "Exhaust Systems",
    description: "Expert exhaust system replacement, repair, and performance upgrades for optimal efficiency.",
  },
  {
    icon: Gauge,
    title: "Electrical & Battery Service",
    description: "Vehicle electrical diagnostics, battery testing and replacement, lighting repairs and full wiring checks.",
  },
  {
    icon: WrenchIcon,
    title: "Preventative Maintenance",
    description: "Complete maintenance services including belts & hoses, filters, fluid changes, and scheduled service plans.",
  },
];

export default function ServicesGrid() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-blue mb-4">
            Our Complete Service Menu
          </h2>
          <p className="text-lg text-text-gray max-w-2xl mx-auto">
            Expert care for every aspect of your vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-text-gray mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-orange font-semibold hover:text-orange/80 transition-colors inline-flex items-center space-x-1"
                >
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

