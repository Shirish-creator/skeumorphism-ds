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
            <p>Default style for general actions. They can be paired with a primary Button to perform a secondary action.</p>
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
      <p>Primary: Highest-priority action; use sparingly. Never put more than one in a group of buttons, and rarely use more than one per page.</p>

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

    <div style={{ marginTop: '60px' }}>
      <h3>Disabled</h3>
<p>
        Disabled: Disabled buttons are used to denote the state that the action is currently not available.
  
</p>      <Tabs
      children={{
        preview: <div style={{padding:'32px'}}> 
        <Button variant='primary'  disabled>Disabled Button</Button>
      </div>,
        code: `
    import React from "react";
    import { Button } from "@shirishcreates/skeumorphism-ds";
    
    export function ButtonDemo() {
    
    return (
       <Button variant='primary' disabled>Disabled Button</Button>
      );
    }
        `,
      }}
    />
    
    </div>
    <div style={{ marginTop: '60px' }}>
      <h3>With Icons</h3>
      <p>Button with Icon: Use to add visual clarity or reinforce the button’s action. Ideal for actions that benefit from quick recognition, like edit ✏️, delete 🗑️, or download ⬇️. Place icons to the left of the text, and ensure the icon meaning aligns with the label. Avoid using icons without accompanying text unless the icon is universally understood.</p>
      <Tabs
      children={{
        preview: 
        <div style={{display:'flex',flexDirection:'column',gap:'0px'}}>
           <div style={{padding:'32px',display:'flex',flexDirection:'row',gap:'24px'}}> 
          <Button variant='primary'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          style={{height:'16px',width:'16px'}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
  
  
   Button</Button>
   <Button variant='primary'>Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          style={{height:'16px',width:'16px'}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>  </Button>
        </div>
        <div style={{padding:'32px',display:'flex',flexDirection:'row',gap:'24px'}}> 
          <Button variant='default'> 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          style={{height:'16px',width:'16px'}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>
  
  
   Button</Button>
   <Button variant='default'>Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
          style={{height:'16px',width:'16px'}}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
  </svg>  </Button>
        </div>
        </div>,
        code: `
    import React from "react";
    import { Button } from "@shirishcreates/skeumorphism-ds";
    import {icon} from "../iconlibrary";

    export function ButtonDemo() {
    
    return (
       <div style={{display:'flex',flexDirection:'column',gap:'0px'}}>
          <div style={{padding:'32px',display:'flex',flexDirection:'row',gap:'24px'}}> 
            <Button variant='primary'>{icon} Button</Button>
            <Button variant='primary'>Button {icon}</Button>
          </div>
          <div style={{padding:'32px',display:'flex',flexDirection:'row',gap:'24px'}}> 
            <Button variant='default'>{icon} Button</Button>
            <Button variant='default'>Button {icon}</Button>
          </div>
      </div>
      );
    }
        `,
      }}
    />
    
    </div>
    <div style={{ marginTop: '60px' }}>
      <h3>Full width button</h3>
<p>
        Full Width: Full width buttons are used to cover the 100% width of the parent item.
  
</p>      <Tabs
      children={{
        preview: <div style={{padding:'32px'}}> 
        <Button variant='primary' fullwidth >Button</Button>
      </div>,
        code: `
    import React from "react";
    import { Button } from "@shirishcreates/skeumorphism-ds";
    
    export function ButtonDemo() {
    
    return (
        <Button variant='primary' fullwidth >Button</Button>
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


