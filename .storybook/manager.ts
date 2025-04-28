// .storybook/manager.ts

import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';
import customtheme from './customtheme';

addons.setConfig({
    theme: customtheme,
    
});
