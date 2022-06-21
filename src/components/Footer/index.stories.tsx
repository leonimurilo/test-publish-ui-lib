import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './index'

// The default export defines where the button will appear in the Storybook
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

// Template determines which component is actually being rendered, and which default args/props to apply to it
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />

// The Template.bind objects are instances or example states of the component
// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const HelloWorld = Template.bind({})
HelloWorld.args = {
  label: 'Hello Red Hat!',
}

export const ClickMe = Template.bind({})
ClickMe.args = {
  label: 'Other example',
}
