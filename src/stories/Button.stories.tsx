import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './../components/Button/Button';
import * as DocBlock from "@storybook/blocks"
import * as React from "react"
import { Tabs } from './components/Tabs'; // your custom Tabs component

const ButtonPage = () => (
  <>
    <DocBlock.Title />
    <p>
  The <code>Button</code> component is a customizable UI element that allows users to interact with the application. 
  It supports various styles, sizes, and variants such as primary, secondary, and tertiary. 
  The button can be used for actions like submitting forms, navigating between pages, and triggering events in your app.
</p>


     <>
        <h2 >Installation</h2>
        <code>
          import &#123; Button &#125; from "@shirishcreates/skeumorphism-ds"
        </code>
     </>

    {/* Default Scrubber */}
          <div style={{ marginTop: '60px' }}>
            <h3>Default</h3>
            <Tabs
      children={{
        preview: <div style={{padding:'32px'}}> 
        <Button variant='default'>Button</Button>
      </div>,
        code: `
    import React from "react";
    import { Button } from "@shirishcreates/skeumorphism-ds";
    
    export function ButtonDemo() {
    
    return (
          <Button variant='default'>Button</Button>
      );
    }
        `,
      }}
    />
    
          </div>
    
          <div style={{ marginTop: '60px' }}>
      <h3>Primary</h3>
      <Tabs
      children={{
        preview: <div style={{padding:'32px'}}> 
        <Button variant='primary'>Button</Button>
      </div>,
        code: `
    import React from "react";
    import { Button } from "@shirishcreates/skeumorphism-ds";
    
    export function ButtonDemo() {
    
    return (
       <Button variant='primary'>Button</Button>
      );
    }
        `,
      }}
    />
    
    </div>
    <DocBlock.Meta />
  </>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      page:ButtonPage
    },
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
    children: 'Button',
  },
};



export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};


