/** @jsxImportSource @emotion/react */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { css } from '@emotion/react';
import { useMemo } from 'react';
const Knob = ({ percent, size }) => {
    // Set knob size based on the 'size' prop
    const knobSize = size === 'small' ? 40 : size === 'medium' ? 56 : 64;
    // Adjust top based on the size of the knob
    const knobTop = size === 'small' ? '-15px' : `-${knobSize / 2}px`;
    return (_jsx("div", { css: css `
        background: var(--colors-scrubber-knob-surface-rest);
        border-radius: var(--dimensions-border-radius-rounded-full);
        border: var(--dimensions-border-width-md) solid var(--colors-scrubber-knob-border-rest);
        max-height: ${knobSize}px;
        max-width: ${knobSize}px;
        min-height: ${knobSize}px;
        min-width: ${knobSize}px;
        box-shadow: var(--shadow-scrubber-knob-rest);
        position: absolute;
        top: ${knobTop};  /* Adjusted top position */
        left: ${percent}%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        justify-content: center;
      `, children: _jsxs("div", { css: css `
       width:100%;
       display:flex;
       padding:0 8px;
       gap:3px;
       justify-content:center;
       flex-direction:row;
      `, children: [_jsx("div", { css: css `
              width: 4px;
              height: 4px;
              background-color: var(--colors-brand-accent-500);
              border-radius: 50%;
              box-shadow: -1.172px 2.344px 2.695px 0px rgba(0, 0, 0, 0.25) inset;

            ` }), _jsx("div", { css: css `
              width: 4px;
              height: 4px;
              background-color: var(--colors-brand-accent-500);
              border-radius: 50%;
              box-shadow: -1.172px 2.344px 2.695px 0px rgba(0, 0, 0, 0.25) inset;

            ` })] }) }));
};
export const Scrubber = ({ value, onChange, variant = 'default', segments = [], size = 'large', // Default size
 }) => {
    // % value used for knob position
    const percent = useMemo(() => {
        if (variant === 'default')
            return value;
        if (segments.length < 2)
            return 0;
        const index = segments.findIndex((v) => v === value);
        return index >= 0 ? (index / (segments.length - 1)) * 100 : 0;
    }, [value, variant, segments]);
    const handleChange = (e) => {
        const raw = Number(e.target.value);
        if (variant === 'default') {
            onChange(raw);
        }
        else if (segments.length > 0) {
            // Convert 0-100 input to segment
            const percent = raw / 100;
            const segmentIndex = Math.round(percent * (segments.length - 1));
            const clampedIndex = Math.min(Math.max(segmentIndex, 0), segments.length - 1);
            onChange(segments[clampedIndex]);
        }
    };
    // Dynamic width based on the size prop
    const scrubberWidth = size === 'small' ? '250px' : size === 'medium' ? '500px' : '800px';
    return (_jsxs("div", { css: css `
        position: relative;
        width: 100%;
        min-width: ${scrubberWidth}; // Adjust width based on size prop
        max-width: ${scrubberWidth};
        padding: 24px;
      `, children: [_jsxs("div", { css: css `
          position: relative;
          height: 12px;
          border-radius: 9999px;
          background: linear-gradient(to bottom, #444, #222);
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
        `, children: [_jsx("div", { css: css `
            position: absolute;
            height: 100%;
            width: ${percent}%;
            background: var(--colors-button-primary-surface-rest);
            border-radius: 9999px;
          ` }), variant === 'segmented' &&
                        segments.map((seg, index) => (_jsx("div", { css: css `
                position: absolute;
                left: ${(index / (segments.length - 1)) * 100}%;
                top: 40%;
                transform: translateX(-50%);
                width: 3px;
                height: 3px;
                background: white;
                border-radius: 999px;
              ` }, index))), _jsx(Knob, { percent: percent, size: size })] }), _jsx("input", { type: "range", min: "0", max: "100", value: percent, onChange: handleChange, css: css `
          top: -25%;
          position: absolute;
          left: 0;
          width: 100%;
          height: 64px;
          opacity: 0;
          cursor: pointer;
        ` })] }));
};
