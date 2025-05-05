import type { Meta, StoryObj } from '@storybook/react';
import { Scrubber } from "../components/Scrubber/Scrubber";

const meta: Meta<typeof Scrubber> = {
  title: 'Components/Scrubber',
  component: Scrubber,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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
      description: 'The variant of the scrubber.',
    },
    segments: {
      control: {
        type: 'object',
      },
      description: 'The segments used in the segmented variant of the scrubber.',
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
      description: 'Size of the scrubber and knob.',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 0,
    variant: 'segmented',
    segments: [0, 25, 50, 75, 100],
    size: 'medium', // Set default size here
  },
};
