import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs'


  ],
  docs: {
    //👇 See the table below for the list of supported options
    defaultName: 'Documentation',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};
 
export default config;
