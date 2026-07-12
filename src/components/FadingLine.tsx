import React from 'react';

interface FadingLineProps {
  color?: string;
  thickness?: number;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function FadingLine({
  color = 'var(--border-color)',
  thickness = 1,
  width = '100%',
  className,
  style,
}: FadingLineProps) {
  return (
    <div
      className={className}
      style={{
        width,
        height: thickness,
        background: `linear-gradient(
          to right,
          transparent 0%,
          ${color} 20%,
          ${color} 80%,
          transparent 100%
        )`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `100% ${thickness}px`,
        ...style,
      }}
    />
  );
}