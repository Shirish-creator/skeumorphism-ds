import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const sizeStyles = {
  small: {
    fontSize: '12px',
    padding: '10px 16px',
  },
  medium: {
    fontSize: '14px',
    padding: '11px 20px',
  },
  large: {
    fontSize: '16px',
    padding: '12px 24px',
  },
} as const;

export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const baseStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 700,
    lineHeight: 1,
    backgroundColor: backgroundColor || (primary ? '#fafafa' : '#ffffff'),
    color: primary ? '#000' : '#333',
    boxShadow: primary
      ? '0 0 0 1px #1ea7fd'
      : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
    ...sizeStyles[size],
  };

  return (
    <button
      type="button"
      style={baseStyle}
      {...props}
    >
      {label}
    </button>
  );
};
