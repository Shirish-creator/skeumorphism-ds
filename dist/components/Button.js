import { jsx as _jsx } from "react/jsx-runtime";
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
};
export const Button = ({ primary = false, size = 'medium', backgroundColor, label, ...props }) => {
    const baseStyle = {
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        display: 'inline-block',
        fontWeight: 700,
        lineHeight: 1,
        backgroundColor: backgroundColor || (primary ? '#FDF5F5' : '#ffffff'),
        color: primary ? '#000' : '#333',
        boxShadow: primary
            ? '0 0 0 1px #1ea7fd'
            : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset',
        ...sizeStyles[size],
    };
    return (_jsx("button", { type: "button", style: baseStyle, ...props, children: label }));
};
