import React from 'react';

interface AlpanaProps {
  className?: string;
  color?: string;
  opacity?: number;
}

/**
 * Refined, minimal geometric Alpana-inspired line motif.
 * Abstract, delicate, high-editorial aesthetic without festive clutter.
 */
export const AlpanaGeometricDivider: React.FC<AlpanaProps> = ({
  className = "w-full max-w-xl mx-auto h-8",
  color = "#541C28",
  opacity = 0.25,
}) => {
  return (
    <svg
      viewBox="0 0 400 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <line x1="0" y1="12" x2="160" y2="12" stroke={color} strokeWidth="0.75" />
      <circle cx="170" cy="12" r="2" stroke={color} strokeWidth="0.75" />
      <path
        d="M 180 12 C 190 6, 195 6, 200 12 C 205 18, 210 18, 220 12"
        stroke={color}
        strokeWidth="0.75"
        fill="none"
      />
      <circle cx="200" cy="12" r="3.5" stroke={color} strokeWidth="0.75" />
      <circle cx="230" cy="12" r="2" stroke={color} strokeWidth="0.75" />
      <line x1="240" y1="12" x2="400" y2="12" stroke={color} strokeWidth="0.75" />
    </svg>
  );
};

export const AlpanaCornerMotif: React.FC<AlpanaProps> = ({
  className = "w-24 h-24",
  color = "#D9CABB",
  opacity = 0.15,
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <path
        d="M 5 95 L 5 20 C 5 10, 10 5, 20 5 L 95 5"
        stroke={color}
        strokeWidth="0.75"
      />
      <path
        d="M 15 95 L 15 30 C 15 22, 22 15, 30 15 L 95 15"
        stroke={color}
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
      <circle cx="30" cy="30" r="4" stroke={color} strokeWidth="0.75" />
      <circle cx="45" cy="15" r="1.5" fill={color} />
      <circle cx="15" cy="45" r="1.5" fill={color} />
    </svg>
  );
};

export const SubtleMandalaLine: React.FC<AlpanaProps> = ({
  className = "w-64 h-64",
  color = "#B89B68",
  opacity = 0.08,
}) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ opacity }}
    >
      <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="0.5" strokeDasharray="3 3" />
      <circle cx="100" cy="100" r="72" stroke={color} strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" stroke={color} strokeWidth="0.5" strokeDasharray="2 2" />
      <path
        d="M 100 10 L 100 190 M 10 100 L 190 100 M 36 36 L 164 164 M 36 164 L 164 36"
        stroke={color}
        strokeWidth="0.35"
      />
      <circle cx="100" cy="100" r="4" fill={color} />
    </svg>
  );
};
