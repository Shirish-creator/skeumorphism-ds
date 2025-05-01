import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

const sizeMap = {
  small: {
    fontSize: '16px',
    padding: '4px',
  },
  medium: {
    fontSize: '18px',
    padding: '6px',
  },
  large: {
    fontSize: '22px',
    padding: '8px',
  },
} as const;

export const Button = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const sizeVars = sizeMap[size];

  const style: React.CSSProperties = {
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 700,
    lineHeight: 1,
    fontFamily: 'var(--typography-xl-font-family-font-family2)',
    fontSize: sizeVars.fontSize,
    padding: sizeVars.padding,
    backgroundColor: primary ? 'var(--colors-branding-colors-bcolor2)' : 'var(--colors-branding-colors-bcolor1)',
    color: primary ? 'var(--color-primary-text)' : 'var(--color-secondary-text)',
  };

  return (
    <button type="button" style={style} {...props}>
      {label}
    </button>
  );
};
