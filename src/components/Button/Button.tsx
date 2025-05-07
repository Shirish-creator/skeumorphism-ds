/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'default';
  fullwidth?: boolean;
  disabled?: boolean;
  theme?: 'light' | 'dark';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  fullwidth = false,
  theme = 'light',
  disabled = false,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    onClick?.(e);
  };

  const sharedWrapperStyle = css`
    background: ${theme === 'dark'
      ? 'var(--colors-surface-neumorphicshade-outer-dark)'
      : 'var(--colors-surface-neumorphicshade-outer-light)'};
    border-radius: var(--dimensions-border-radius-rounded-xl);
    padding: var(--dimensions-spacing-1-5);
    user-select: none;
    width: ${fullwidth ? '100%' : 'fit-content'};
    height: fit-content;
  `;

  const renderPrimaryButton = () => (
    <div css={sharedWrapperStyle}>
      <div  
        css={css`
          background: ${!disabled ? 'var(--colors-button-primary-border-rest)':'var(--colors-button-default-border-rest)'};
          border-radius: var(--dimensions-border-radius-rounded-lg);
          max-height:var(--dimensions-spacing-10);
          height:var(--dimensions-spacing-10);
          min-height:var(--dimensions-spacing-10);
          box-shadow: ${!disabled
            ? 'var(--shadow-button-rest)'
            : 'var(--shadow-button-disabled)'};
          padding: var(--dimensions-spacing-1);
          user-select: none;
          ${!fullwidth && `width: fit-content;`}

          ${!disabled &&
            `&:active {
              box-shadow: var(--shadow-button-pressed);
              transform: scale(0.99);
            }`}
        `}
      >
        <button
          onClick={handleClick}
          disabled={disabled}
          css={css`
            background: var(--colors-button-primary-surface-rest);
            border-radius: var(--dimensions-border-radius-rounded);
            color: var(--colors-text-onsurface-action-rest);
            padding: var(--dimensions-spacing-2) var(--dimensions-spacing-4);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content:center;

            gap: var(--dimensions-spacing-2);
            font-family: var(--typography-font-family-sansserif), sans-serif;
            font-size: var(--typography-size-base);
            font-weight: 600;
            text-transform: capitalize;
            width: ${fullwidth ? '100%' : 'fit-content'};

            border: none;
            height:100%;
            cursor: pointer;

            @media (hover: hover) {
              &:hover {
                background: var(--colors-button-primary-surface-hovered);
              }
            }

            &:focus-visible {
              outline: var(--dimensions-border-width-md) solid var(--colors-brand-primary-800);
            }

            &:disabled {
              background: var(--colors-button-primary-surface-disabled);
              color: var(--colors-text-disabled);
              cursor: not-allowed;
              opacity: 0.6;
            }

            svg {
              color: var(--colors-icon-onsurface-action-rest);
            }
          `}
          {...props}
        >
          {children}
        </button>
      </div>
    </div>
  );

  const renderDefaultButton = () => (
    <div css={sharedWrapperStyle}>
      <div
        css={css`
          background: var(--colors-button-default-border-rest);
          border-radius: var(--dimensions-border-radius-rounded-lg);
          max-height:var(--dimensions-spacing-10);
          height:var(--dimensions-spacing-10);
          min-height:var(--dimensions-spacing-10);
          padding: var(--dimensions-spacing-1);
          box-shadow: ${!disabled
            ? 'var(--shadow-button-rest)'
            : 'var(--shadow-button-disabled)'};
          user-select: none;
          ${!fullwidth && `width: fit-content;`}

          ${!disabled &&
            `&:active {
              box-shadow: var(--shadow-button-pressed);
              transform: scale(0.99);
            }`}
        `}
      >
        <button
          onClick={handleClick}
          disabled={disabled}
          css={css`
            background: var(--colors-button-default-surface-rest);
            border: var(--dimensions-border-width-md) solid var(--colors-button-default-border-rest);
            color: var(--colors-text-primary);
            border-radius: var(--dimensions-border-radius-rounded);
            padding: var(--dimensions-spacing-2) var(--dimensions-spacing-4);
            font-family: var(--typography-font-family-sansserif), sans-serif;
            font-size: var(--typography-size-base);
            font-weight: 600;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content:center;
            gap: var(--dimensions-spacing-2);
            text-transform: capitalize;
            transition: background 0.2s ease, border 0.2s ease;
            width: ${fullwidth ? '100%' : 'fit-content'};
            height:100%;
            border: none;
            cursor: pointer;

            svg {
              color: var(--colors-icon-primary);
            }

            @media (hover: hover) {
              &:hover {
                background: var(--colors-button-default-surface-hovered);
              }
            }

            &:active:not(:disabled) {
              background: var(--colors-button-default-surface-rest);
            }

            &:focus-visible {
              outline: var(--dimensions-border-width-md) solid var(--colors-brand-primary-800);
            }

            &:disabled {
              background: var(--colors-button-default-surface-disabled);
              color: var(--colors-text-disabled);
              cursor: not-allowed;
              opacity: 0.6;

              svg {
                color: var(--colors-icon-disabled);
              }
            }
          `}
          {...props}
        >
          {children}
        </button>
      </div>
    </div>
  );

  if (variant === 'primary') return renderPrimaryButton();
  return renderDefaultButton();
};

export { Button };
