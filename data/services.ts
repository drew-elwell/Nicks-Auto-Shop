import {
  Battery,
  Car,
  Droplet,
  Gauge,
  LucideIcon,
  Settings,
  Wrench,
  Wind,
} from 'lucide-react';

type ServiceDetail = {
  slug: string;
  title: string;
  icon: LucideIcon;
  shortDescription: string;
  longDescription: string;
  servicesOffered: string[];
  benefits: string[];
  turnaround: string;
};

export const services: ServiceDetail[] = [
  {
    slug: 'brake-repair',
    title: 'Brake Repair',
    icon: Wrench,
    shortDescription: 'Pads, rotors, and hydraulics dialed in so you stop straight and quiet.',
    longDescription:
      'Your brakes are the most important safety system on your vehicle. We use premium parts, precision machining, and ASE-certified technicians to restore factory braking performance and stop squeals, vibrations, or warning lights.',
    servicesOffered: [
      'Brake pad and shoe replacement',
      'Rotor resurfacing or replacement',
      'Hydraulic system flush & leak repair',
      'ABS, traction control, and sensor diagnostics',
    ],
    benefits: [
      'Shorter stopping distances in all conditions',
      'Even pedal feel without pulling or vibration',
      'Eliminates grinding, squealing, or warning lights',
      'Extends life of tires, rotors, and calipers',
    ],
    turnaround:
      'Most brake repairs are completed same day. Extensive hydraulic repairs may require 24 hours.',
  },
  {
    slug: 'oil-change-lube',
    title: 'Oil Change',
    icon: Droplet,
    shortDescription: 'Fresh oil, new filters, and a quick inspection to keep the engine happy.',
    longDescription:
      'Regular oil changes are the easiest way to protect your engine. We stock OEM-approved fluids, reset maintenance reminders, and provide a full inspection so you always know the health of your vehicle.',
    servicesOffered: [
      'Synthetic, high-mileage, and diesel oil options',
      'OEM filter replacement and drain plug seals',
      'Complete chassis lube service',
      'Complimentary multi-point inspection & fluid top-off',
    ],
    benefits: [
      'Protects against engine wear and overheating',
      'Improves fuel economy and performance',
      'Maintains warranty requirements and service records',
      'Catches potential issues before they become costly repairs',
    ],
    turnaround: 'Plan for 30-45 minutes. Relax in our lounge or drop off anytime during business hours.',
  },
  {
    slug: 'wheel-alignment',
    title: 'Wheel Alignment',
    icon: Car,
    shortDescription: 'Laser alignment for a centered steering wheel and longer-lasting tires.',
    longDescription:
      'Colorado roads can knock even the toughest suspension out of spec. Our digital alignment rack calibrates your vehicle to exact factory measurements for a smooth ride and even tire wear.',
    servicesOffered: [
      'Four-wheel computer alignment',
      'Steering & suspension inspection',
      'Camber/caster/toe adjustments',
      'Tire wear and pressure analysis',
    ],
    benefits: [
      'Stops the vehicle from pulling or drifting',
      'Eliminates steering wheel shake',
      'Maximizes tire life and fuel efficiency',
      'Improves handling and overall ride quality',
    ],
    turnaround: 'Allow 60-90 minutes. Alignments are best performed with healthy suspension components.',
  },
  {
    slug: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    icon: Battery,
    shortDescription: 'Factory-level scan tools that uncover check-engine lights and drivability issues.',
    longDescription:
      'Modern vehicles require precise data to pinpoint engine problems. We combine factory scan tools, lab scopes, and real-world testing to identify the root cause before recommending repairs.',
    servicesOffered: [
      'Check-engine light diagnostics',
      'Fuel & ignition system testing',
      'Sensor, wiring, and module repair',
      'Pre-purchase and emissions inspections',
    ],
    benefits: [
      'Accurate troubleshooting prevents guesswork',
      'Restores lost power, MPG, and reliability',
      'Ensures emissions compliance',
      'Saves money by fixing the root cause first',
    ],
    turnaround:
      'Diagnostic appointments typically take 1-2 hours. Repair timelines depend on final findings.',
  },
  {
    slug: 'air-conditioning',
    title: 'Air Conditioning',
    icon: Wind,
    shortDescription: 'Leak checks, recharge, and repairs that bring back crisp, cold air.',
    longDescription:
      'From warm air to odd smells, our AC specialists handle everything from refrigerant leaks to electronic climate controls so you stay comfortable year-round.',
    servicesOffered: [
      'AC performance testing and leak detection',
      'Refrigerant recharge and component replacement',
      'Cabin air filter and evaporator cleaning',
      'Climate control diagnostics and recalibration',
    ],
    benefits: [
      'Consistent cold air even in peak summer heat',
      'Removes odors and improves cabin air quality',
      'Protects compressors and seals from premature failure',
      'Reliable defrosting for winter safety',
    ],
    turnaround: 'Standard AC service takes 1-2 hours. Major component replacement may require next-day pickup.',
  },
  {
    slug: 'exhaust-systems',
    title: 'Exhaust Systems',
    icon: Settings,
    shortDescription: 'Quiet, safe exhaust systems—whether you need a simple fix or full upgrade.',
    longDescription:
      'Whether you need a quiet commute or more performance, we fabricate, weld, and install exhaust components that keep emissions in check and sound just right.',
    servicesOffered: [
      'Muffler, catalytic converter, and resonator replacement',
      'Custom pipe bending and fabrication',
      'Exhaust leak repair and hanger replacement',
      'Performance system upgrades and tuning',
    ],
    benefits: [
      'Improves engine breathing and power delivery',
      'Removes harmful fumes from the cabin',
      'Passes state emissions and sound regulations',
      'Long-lasting stainless and aluminized options available',
    ],
    turnaround:
      'Simple repairs can be completed same day. Custom fabrication projects are quoted individually.',
  },
  {
    slug: 'electrical-battery',
    title: 'Electrical & Battery Service',
    icon: Gauge,
    shortDescription: 'Electrical testing, battery swaps, and wiring repairs that prevent no-starts.',
    longDescription:
      'Today’s vehicles rely on complex electrical networks. We isolate parasitic drains, repair wiring, and install OEM-quality batteries so every system powers on when you need it.',
    servicesOffered: [
      'Battery load testing and replacement',
      'Charging & starting system diagnostics',
      'Lighting, accessory, and wiring repairs',
      'Keyless entry, power window, and module service',
    ],
    benefits: [
      'No more surprise no-start situations',
      'Protects sensitive electronics from voltage spikes',
      'Restores headlights, interiors lights, and accessories',
      'Ensures reliable powering of aftermarket equipment',
    ],
    turnaround: 'Battery swaps take 20 minutes. Complex electrical repairs vary after diagnostic testing.',
  },
  {
    slug: 'preventative-maintenance',
    title: 'Preventative Maintenance',
    icon: Wrench,
    shortDescription: 'Belts, hoses, filters, and fluids handled on schedule to avoid surprises.',
    longDescription:
      'Staying ahead of the factory maintenance schedule prevents breakdowns. We build personalized plans around how and where you drive in Colorado.',
    servicesOffered: [
      'Factory 30/60/90K services and inspections',
      'Timing belt, coolant, and transmission service',
      'Filter, belt, and hose replacement',
      'Digital vehicle health reports with photos',
    ],
    benefits: [
      'Maximizes vehicle lifespan and resale value',
      'Maintains warranty requirements',
      'Prevents roadside breakdowns',
      'Provides clear maintenance records for future service',
    ],
    turnaround:
      'Maintenance appointments vary from 1-3 hours depending on the service bundle. We offer shuttle and after-hours drop-off.',
  },
];

export const getServiceBySlug = (slug: string) =>
  services.find((service) => service.slug === slug);

