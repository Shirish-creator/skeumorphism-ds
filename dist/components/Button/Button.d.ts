import { ReactNode, ButtonHTMLAttributes } from 'react';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'default';
    fullwidth?: boolean;
    disabled?: boolean;
    theme?: 'light' | 'dark';
}
declare const Button: React.FC<ButtonProps>;
export { Button };
//# sourceMappingURL=Button.d.ts.map