import type { Preview } from '@storybook/react'
import "../src/style-dictionary-dist/styles.css"
import * as DocBlock from "@storybook/blocks"
import * as React from "react"

const preview: Preview = {
  parameters: {
  
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
