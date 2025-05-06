import type { Meta, StoryObj } from '@storybook/react';
import { Scrubber } from "../components/Scrubber/Scrubber";
import * as DocBlock from "@storybook/blocks"
import * as React from "react"

const ScrubberPage = () => (
  <>
    <DocBlock.Title />
    <p>
      The <code>Scrubber</code> component provides an interactive slider element with optional segments,
      customizable size, and style. It allows users to adjust a value within a specified range and is perfect
      for use in controls or interactive UI elements.
    </p>

     <>
        <h2 >Installation</h2>
        <code>
          import &#123; Scrubber &#125; from "@shirishcreates/skeumorphism-ds"
        </code>
     </>

    <DocBlock.Primary />
    <DocBlock.Controls />
    <DocBlock.Meta />
    <DocBlock.Stories />
  </>
);



// Meta configuration for Storybook
const meta: Meta<typeof Scrubber> = {
  title: 'Components/Scrubber',  // Title displayed in Storybook UI
  component: Scrubber,  // The component being documented
  parameters: {
    layout: 'centered',  // Center the component in the preview pane
    // docs: {
    //   description: {
    //     component: 'The `Scrubber` component provides an interactive slider element with optional segments, customizable size, and style. It allows users to adjust a value within a specified range and is perfect for use in controls or interactive UI elements.'
    //   },
      docs: {
        page: ScrubberPage
    },
  },
  tags: ['autodocs'],  // Enables auto-generating docs based on JSDoc annotations
  argTypes: {
    value: {
      control: {
        type: 'range',
        min: 0,
        max: 100,
        step: 1,
      },
      description: 'The scrubber value, which can be adjusted using the slider.',
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'segmented'],
      },
      description: 'The variant of the scrubber. "default" is a simple scrubber, "segmented" shows discrete segments.',
    },
    segments: {
      control: {
        type: 'object',
      },
      description: 'The segments used in the segmented variant of the scrubber. It defines distinct points on the scrubber.',
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the scrubber and knob. "small", "medium", and "large" options.',
    },
    width: {
      control: 'text',
      description: 'Optional width of the scrubber (e.g. "500px", "100%", or just 300).',
    },
  },
};

export default meta;

// Story type definition
type Story = StoryObj<typeof meta>;

// Default story example
export const Default: Story = {
  args: {
    value: 0,  // Default value for the scrubber
    variant: 'default',  // Default variant
    segments: [0, 25, 50, 75, 100],  // Segments for the segmented variant
    size: 'small',  // Default size
    width: '400px',  // Optional custom width
  },
};

// Segmented story example
export const Segmented: Story = {
  args: {
    value: 25,  // Default value for the scrubber
    variant: 'segmented',  // Default variant
    segments: [0, 25, 50, 75, 100],  // Segments for the segmented variant
    size: 'small',  // Default size
    width: '400px',  // Optional custom width
  },
};
