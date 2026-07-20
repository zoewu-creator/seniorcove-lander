export function Logo({ px }: { px?: number }) {
  return (
    <svg
      viewBox="0 0 26 26"
      aria-hidden="true"
      style={px ? { width: px, height: px } : undefined}
    >
      <rect x="1.5" y="1.5" width="23" height="23" rx="7.5" fill="#0F5C3D" />
      <rect x="1.5" y="1.5" width="23" height="11.5" rx="7.5" fill="#fff" opacity="0.09" />
      <path
        d="M6.5 17 Q13 7.7 19.5 17"
        fill="none"
        stroke="#C6A25E"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="13" cy="14.6" r="1.55" fill="#C6A25E" />
    </svg>
  );
}
