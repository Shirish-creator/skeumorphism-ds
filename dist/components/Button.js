import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const Button = ({ children, onClick, variant = 'default', fullwidth = false, theme = 'light', disabled = false, ...props }) => {
    const handleClick = (e) => {
        if (disabled)
            return;
        onClick === null || onClick === void 0 ? void 0 : onClick(e);
    };
    const sharedWrapperStyle = css `
    background: ${theme === 'dark'
        ? 'var(--colors-surface-neumorphicshade-outer-dark)'
        : 'var(--colors-surface-neumorphicshade-outer-light)'};
    border-radius: var(--dimensions-border-radius-rounded-2xl);
    padding: var(--dimensions-spacing-1-5);
    user-select: none;
    width: ${fullwidth ? '100%' : 'fit-content'};
    height: fit-content;
  `;
    const renderPrimaryButton = () => (_jsx("div", { css: sharedWrapperStyle, children: _jsx("div", { css: css `
          background: var(--colors-button-primary-border-rest);
          border-radius: var(--dimensions-border-radius-rounded-xl);
          box-shadow: ${!disabled
                ? 'var(--shadow-button-rest)'
                : 'var(--shadow-button-pressed)'};
          padding: var(--dimensions-spacing-1);
          user-select: none;
          width: ${fullwidth ? '100%' : 'fit-content'};

          ${!disabled &&
                `&:active {
              box-shadow: var(--shadow-button-pressed);
              transform: scale(0.99);
            }`}
        `, children: _jsx("button", { onClick: handleClick, disabled: disabled, css: css `
            background: var(--colors-button-primary-surface-rest);
            border-radius: var(--dimensions-border-radius-rounded-lg);
            color: var(--colors-text-onsurface-action-rest);
            padding: var(--dimensions-spacing-2) var(--dimensions-spacing-4);
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--dimensions-spacing-2);
            font-family: var(--typography-font-family-sansserif), sans-serif;
            font-size: var(--typography-size-base);
            font-weight: 600;
            text-transform: capitalize;
            width: ${fullwidth ? '100%' : 'auto'};
            border: none;
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
              background: var(--colors-button-disabled-background);
              color: var(--colors-button-disabled-text);
              cursor: not-allowed;
              opacity: 0.6;
            }

            svg {
              color: var(--colors-icon-onsurface-action-rest);
            }
          `, ...props, children: children }) }) }));
    const renderDefaultButton = () => (_jsx("div", { css: sharedWrapperStyle, children: _jsx("div", { css: css `
          background: var(--colors-button-default-border-rest);
          border-radius: var(--dimensions-border-radius-rounded-xl);
          padding: var(--dimensions-spacing-1);
          box-shadow: ${!disabled
                ? 'var(--shadow-button-rest)'
                : 'var(--shadow-button-pressed)'};
          user-select: none;
          width: ${fullwidth ? '100%' : 'fit-content'};

          ${!disabled &&
                `&:active {
              box-shadow: var(--shadow-button-pressed);
              transform: scale(0.99);
            }`}
        `, children: _jsx("button", { onClick: handleClick, disabled: disabled, css: css `
            background: var(--colors-button-default-surface-rest);
            border: var(--dimensions-border-width-md) solid var(--colors-button-default-border-rest);
            color: var(--colors-text-primary);
            border-radius: var(--dimensions-border-radius-rounded-lg);
            padding: var(--dimensions-spacing-2) var(--dimensions-spacing-4);
            font-family: var(--typography-font-family-sansserif), sans-serif;
            font-size: var(--typography-size-base);
            font-weight: 600;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: var(--dimensions-spacing-2);
            text-transform: capitalize;
            transition: background 0.2s ease, border 0.2s ease;
            width: ${fullwidth ? '100%' : 'auto'};
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
              background: var(--colors-tailwind-stone-200);
              color: var(--colors-text-disabled);
              cursor: not-allowed;
              opacity: 0.6;

              svg {
                color: var(--colors-icon-disabled);
              }
            }
          `, ...props, children: children }) }) }));
    if (variant === 'primary')
        return renderPrimaryButton();
    return renderDefaultButton();
};
export { Button };
