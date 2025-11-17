interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  textColor?: string;
}

export default function Logo({ size = 'md', showText = true, textColor = 'text-dark-blue' }: LogoProps) {
  const sizes = {
    sm: { icon: 'w-10 h-10', text: 'text-lg', subtext: 'text-xs' },
    md: { icon: 'w-12 h-12', text: 'text-2xl', subtext: 'text-sm' },
    lg: { icon: 'w-16 h-16', text: 'text-3xl', subtext: 'text-base' },
  };

  const sizeClasses = sizes[size];

  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon - Dark Blue Gear with Orange Wrench */}
      <div className={`${sizeClasses.icon} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Dark Blue Gear - 6 teeth */}
          {/* Top tooth */}
          <path d="M50 5 L45 15 L35 15 L30 5 L40 0 L50 0 Z" fill="#1A365D" />
          {/* Bottom tooth */}
          <path d="M50 95 L45 85 L35 85 L30 95 L40 100 L50 100 Z" fill="#1A365D" />
          {/* Left tooth */}
          <path d="M5 50 L15 45 L15 35 L5 30 L0 40 L0 50 Z" fill="#1A365D" />
          {/* Right tooth */}
          <path d="M95 50 L85 55 L85 65 L95 70 L100 60 L100 50 Z" fill="#1A365D" />
          {/* Top-right tooth */}
          <path d="M85 15 L75 25 L70 20 L80 10 L85 5 L90 10 Z" fill="#1A365D" />
          {/* Bottom-left tooth */}
          <path d="M15 85 L25 75 L30 80 L20 90 L15 95 L10 90 Z" fill="#1A365D" />
          
          {/* Gear Center Circle */}
          <circle cx="50" cy="50" r="28" fill="#1A365D" />
          <circle cx="50" cy="50" r="20" fill="white" />
          
          {/* Orange Wrench - Diagonal, pointing up and to the right (45 degree rotation) */}
          <g transform="rotate(45 50 50)">
            {/* Wrench handle - vertical bar */}
            <rect x="47" y="15" width="6" height="25" rx="1" fill="#FF8C00" />
            {/* Wrench head - U-shaped opening at bottom */}
            <path
              d="M47 40 L47 50 L42 50 L42 55 L58 55 L58 50 L53 50 L53 40 Z"
              fill="#FF8C00"
            />
            {/* Wrench opening (white space) */}
            <rect x="49" y="52" width="2" height="3" fill="white" />
          </g>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span className={`${sizeClasses.text} font-bold leading-tight ${textColor}`}>
            NICK&apos;S
          </span>
          <span className={`${sizeClasses.subtext} font-medium ${textColor}`}>
            AUTO REPAIR
          </span>
        </div>
      )}
    </div>
  );
}

