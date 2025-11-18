import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { width: 120, height: 48 },
  md: { width: 160, height: 64 },
  lg: { width: 200, height: 80 },
};

export default function Logo({ size = 'md' }: LogoProps) {
  const { width, height } = sizeMap[size];

  return (
    <div className="flex items-center">
      <Image
        src="/images/Blue-logo.png"
        alt="Nick's Auto Repair logo"
        width={width}
        height={height}
        priority
        className="h-auto w-auto"
      />
    </div>
  );
}

