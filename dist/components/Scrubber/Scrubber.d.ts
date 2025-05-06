type ScrubberProps = {
    value: number;
    onChange: (value: number) => void;
    variant?: 'default' | 'segmented';
    segments?: number[];
    size?: 'xSmall' | 'small' | 'medium' | 'large';
    width?: string | number;
};
export declare const Scrubber: ({ value, onChange, variant, segments, size, width, }: ScrubberProps) => import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Scrubber.d.ts.map