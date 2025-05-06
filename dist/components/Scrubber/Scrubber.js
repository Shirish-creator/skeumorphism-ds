/** @jsxImportSource @emotion/react */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
import { css, keyframes } from '@emotion/react';
import { useMemo } from 'react';
const fadeIn = keyframes `
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;
const Knob = ({ percent, size, animated, }) => {
    const knobSize = size === 'xSmall' ? 20 :
        size === 'small' ? 40 :
            size === 'medium' ? 56 :
                64;
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
    top: 50%; /* Center vertically */
    left: ${percent}%;
    transform: translate(-50%, -50%); /* Offset by 50% both horizontally and vertically */
    display: flex;
    align-items: center;
    justify-content: center;
    ${animated &&
            css `
      transition: left 0.3s ease, transform 0.3s ease;
    `}
  `, children: _jsx("div", { css: css `
      width: 100%;
      display: flex;
      padding: 0 8px;
      gap: 3px;
      justify-content: center;
      flex-direction: row;
    `, children: size !== 'xSmall' &&
                [...Array(2)].map((_, i) => (_jsx("div", { css: css `
            width: 4px;
            height: 4px;
            background-color: var(--colors-brand-accent-500);
            border-radius: 50%;
            box-shadow: -1.172px 2.344px 2.695px 0px rgba(0, 0, 0, 0.25) inset;
            ${animated &&
                        css `
              animation: ${fadeIn} 0.4s ease forwards;
            `}
          ` }, i))) }) }));
};
export const Scrubber = ({ value, onChange, variant = 'default', segments = [], size = 'large', width, }) => {
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
            const percent = raw / 100;
            const segmentIndex = Math.round(percent * (segments.length - 1));
            const clampedIndex = Math.min(Math.max(segmentIndex, 0), segments.length - 1);
            onChange(segments[clampedIndex]);
        }
    };
    return (_jsxs("div", { css: css `
      position: relative;
      width: ${typeof width === 'number' ? `${width}px` : width || '100%'};
      padding: ${size === 'xSmall' ? '4px' : '6px'};
    `, children: [_jsx("div", { css: css `
          position: absolute;
          top: 50%;
          left: 50%;
          height: 100%;
          width: 100%;
          transform: translate(-50%, -50%);
          border-radius: 9999px;
          background: linear-gradient(360deg, #737373 0%, #bdbdbd 0.01%, #fff 100%);
        ` }), _jsxs("div", { css: css `
          position: relative;
          height: 8px;
          border-radius: 9999px;
          background: linear-gradient(to bottom, #444, #222);
          box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.2);
          ${variant === 'segmented' &&
                    css `
            transition: width 0.3s ease;
          `}
        `, children: [_jsx("div", { css: css `
        position: absolute;
        height: 100%;
        width: ${percent}%;
        background: var(--colors-button-primary-surface-rest);
        border-radius: 9999px;
        ${variant === 'segmented' &&
                            css `
            transition: width 0.3s ease;
          `}
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
              ` }, index))), _jsx(Knob, { percent: percent, size: size, animated: variant === 'segmented' })] }), _jsx("input", { type: "range", min: "0", max: "100", value: percent, onChange: handleChange, css: css `
        top: -100%;
        position: absolute;
        left: 0;
        width: 100%;
        height: 60px; // more generous touch target
        opacity: 0;
        cursor: pointer;
        touch-action: pan-x;
        -webkit-tap-highlight-color: transparent;
      ` })] }));
};
