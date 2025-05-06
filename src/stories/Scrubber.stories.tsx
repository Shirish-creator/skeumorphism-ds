import type { Meta, StoryObj } from '@storybook/react';
import { Scrubber } from "../components/Scrubber/Scrubber";
import * as DocBlock from "@storybook/blocks";
import { useState } from 'react';
import * as React from "react";
import { Tabs } from './components/Tabs'; // your custom Tabs component

const ScrubberPage = () => {
  const [scrubberValue1, setScrubberValue1] = useState(50);
  const [scrubberValue2, setScrubberValue2] = useState(50);

  return (
    <>
      <DocBlock.Title />
      <p>
        The <code>Scrubber</code> component provides an interactive slider element with optional segments,
        customizable size, and style. It allows users to adjust a value within a specified range and is perfect
        for use in controls or interactive UI elements.
      </p>

      <h2>Installation</h2>
      <code>import &#123; Scrubber &#125; from "@shirishcreates/skeumorphism-ds"</code>

      {/* Default Scrubber */}
      <div style={{ marginTop: '60px' }}>
        <h3>Default</h3>
        <Tabs>
  {{
    preview: (
      <Scrubber
        value={scrubberValue1}
        size="medium"
        onChange={setScrubberValue1}
        width="100%"
      />
    ),
    code: `
import React, { useState } from "react";
import { Scrubber } from "@shirishcreates/skeumorphism-ds";

export function ScrubberDemo() {
const [scrubberValue, setScrubberValue] = useState(0);

return (
    <Scrubber
      variant="segmented" 
      value={scrubberValue} 
      onChange={setScrubberValue} 
    />
  );
}

    `,
  }}
</Tabs>

      </div>

      {/* Segmented Scrubber */}
      <div style={{ marginTop: '60px' }}>
  <h3>Segmented</h3>
  <Tabs
  children={{
    preview: <div style={{padding:'32px'}}> <Scrubber 
    segments={[1000, 5000, 10000, 20000, 50000]} 
    variant="segmented" 
    value={scrubberValue2} 
    width="100%" 
    onChange={setScrubberValue2} 
  /></div>,
    code: `
import React, { useState } from "react";
import { Scrubber } from "@shirishcreates/skeumorphism-ds";

export function ScrubberDemo() {
const [scrubberValue, setScrubberValue] = useState(0);

return (
    <Scrubber 
        segments={[1000, 5000, 10000, 20000, 50000]} 
        variant="segmented" 
        value={scrubberValue} 
        onChange={setScrubberValue} 
      />
  );
}
    `,
  }}
/>

</div>


      <DocBlock.Controls />
      <DocBlock.Meta />
    </>
  );
};

const meta: Meta<typeof Scrubber> = {
  title: 'Components/Scrubber',
  component: Scrubber,
  parameters: {
    layout: 'centered',
    docs: {
      page: ScrubberPage,
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'The scrubber value, which can be adjusted using the slider.',
    },
    variant: {
      control: { type: 'radio', options: ['default', 'segmented'] },
      description: 'The variant of the scrubber.',
    },
    segments: {
      control: { type: 'object' },
      description: 'Defines distinct points on the scrubber.',
    },
    size: {
      control: { type: 'radio', options: ['small', 'medium', 'large'] },
      description: 'Size of the scrubber and knob.',
    },
    width: {
      control: 'text',
      description: 'Optional width of the scrubber (e.g. "500px", "100%", or just 300).',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    variant: 'default',
    segments: [0, 25, 50, 75, 100],
    size: 'small',
    width: '400px',
  },
};

export const Segmented: Story = {
  args: {
    value: 25,
    variant: 'segmented',
    segments: [0, 25, 50, 75, 100],
    size: 'small',
    width: '400px',
  },
};
