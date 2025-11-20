export const servicePackages = [
  {
    title: 'Maintenance & Fluids',
    description:
      'Keep factory warranties intact with scheduled oil changes, filter replacements, coolant and transmission service, and digital inspection reports.',
    items: ['Oil Change', 'Preventative Maintenance', 'Fluid Flushes'],
  },
  {
    title: 'Diagnostics & Repair',
    description:
      'Solve warning lights, drivability issues, and electrical problems using OEM-level scan tools, lab scopes, and years of local experience.',
    items: ['Engine Diagnostics', 'Electrical & Battery', 'Brake Repair'],
  },
  {
    title: 'Comfort & Performance',
    description:
      'Make every drive a good one with precise alignments, AC service, and exhaust work tailored to Colorado roads and emissions standards.',
    items: ['Wheel Alignment', 'Air Conditioning', 'Exhaust Systems'],
  },
] as const;

export const processSteps = [
  {
    title: 'Listen & Inspect',
    detail:
      'We start with a road test (when appropriate), discuss your concerns, and capture photos during a 35-point inspection.',
  },
  {
    title: 'Diagnose & Quote',
    detail:
      'ASE-certified techs confirm the root cause, then send you a digital estimate with priority levels so you can make informed decisions.',
  },
  {
    title: 'Repair & Verify',
    detail:
      'Work is performed with OEM-quality parts, torque specs, and verification tests. We keep you updated via text throughout the repair.',
  },
  {
    title: 'Deliver & Support',
    detail:
      'You get a clean vehicle, detailed invoice, and nationwide warranty coverage. We follow up after a few days to make sure everything feels perfect.',
  },
] as const;


