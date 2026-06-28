type LogoProps = {
  size?: number;
  className?: string;
};

export const Logo = ({ size = 36, className }: LogoProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden
  >
    <rect
      x="1"
      y="1"
      width="38"
      height="38"
      rx="12"
      fill="url(#logo-bg)"
      stroke="rgba(58, 52, 46, 0.1)"
      strokeWidth="1"
    />
    <circle cx="16" cy="20" r="10" fill="#528a5c" fillOpacity="0.95" />
    <circle cx="24" cy="20" r="10" fill="#3d6b48" fillOpacity="0.88" />
    <circle cx="20" cy="20" r="3.5" fill="#fffcf8" fillOpacity="0.95" />
    <defs>
      <linearGradient id="logo-bg" x1="8" y1="4" x2="32" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#8fb39a" />
        <stop offset="1" stopColor="#c5d4c8" />
      </linearGradient>
    </defs>
  </svg>
);
