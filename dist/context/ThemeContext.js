import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
// Define theme objects
export const lightTheme = {
    colors: {
        background: '#ffffff',
        primary: '#007bff',
        text: '#000000',
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
    },
};
export const darkTheme = {
    colors: {
        background: '#333333',
        primary: '#00f5a0',
        text: '#ffffff',
    },
    typography: {
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
    },
};
// Context
const ThemeContext = createContext(undefined);
// Provider
export const ThemeProvider = ({ children, theme, }) => {
    const [internalTheme, setInternalTheme] = useState((theme === null || theme === void 0 ? void 0 : theme.baseColor) === 'red' || true);
    const currentTheme = internalTheme ? lightTheme : darkTheme;
    return (_jsx(ThemeContext.Provider, { value: { theme: currentTheme, setTheme: setInternalTheme }, children: children }));
};
// Hook
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
