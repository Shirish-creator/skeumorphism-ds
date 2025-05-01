import { ReactNode } from 'react';
export declare const lightTheme: {
    colors: {
        background: string;
        primary: string;
        text: string;
    };
    typography: {
        fontFamily: string;
        fontSize: string;
    };
};
export declare const darkTheme: {
    colors: {
        background: string;
        primary: string;
        text: string;
    };
    typography: {
        fontFamily: string;
        fontSize: string;
    };
};
interface ThemeContextType {
    theme: typeof lightTheme;
    setTheme: (theme: boolean) => void;
}
export declare const ThemeProvider: ({ children, theme, }: {
    children: ReactNode;
    theme?: any;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useTheme: () => ThemeContextType;
export {};
//# sourceMappingURL=ThemeContext.d.ts.map