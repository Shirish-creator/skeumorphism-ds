import React, { createContext, useContext, useState, ReactNode } from 'react';

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

// Theme context type
interface ThemeContextType {
  theme: typeof lightTheme;
  setTheme: (theme: boolean) => void;
}

// Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Provider
export const ThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme?: any;
}) => {
  const [internalTheme, setInternalTheme] = useState<boolean>(
    theme?.baseColor === 'red' || true
  );

  const currentTheme = internalTheme ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, setTheme: setInternalTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Hook
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
