import { jsx as _jsx } from "react/jsx-runtime";
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
};
export const Button = ({ primary = false, size = 'medium', label, ...props }) => {
    const sizeVars = sizeMap[size];
    const style = {
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
    return (_jsx("button", { type: "button", style: style, ...props, children: label }));
};
