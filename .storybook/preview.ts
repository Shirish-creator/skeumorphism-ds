import type { Preview } from '@storybook/react'
import "../src/style-dictionary-dist/merged-variables.css"


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;