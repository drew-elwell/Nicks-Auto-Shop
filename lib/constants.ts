export const BUSINESS_INFO = {
  phone: '(303) 499-4300',
  phoneRaw: '3034994300',
  address: {
    street: '2800 Moorhead Ave',
    city: 'Boulder',
    state: 'CO',
    zip: '80305',
    full: '2800 Moorhead Ave\nBoulder, CO 80305',
    googleMaps: '2800+Moorhead+Ave,+Boulder,+CO+80305',
  },
  hours: {
    weekdays: 'Mon-Fri: 8AM - 5PM',
    weekdaysFull: 'Monday - Friday: 8:00 AM - 5:00 PM',
    weekends: 'Closed',
    weekendsFull: 'Saturday - Sunday: Closed',
  },
  founded: 1977,
  name: "Nick's Auto Repair",
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/contact-us', label: 'Contact Us' },
] as const;

export const FEATURED_SERVICES_COUNT = 3;
export const FOOTER_SERVICES_COUNT = 5;


