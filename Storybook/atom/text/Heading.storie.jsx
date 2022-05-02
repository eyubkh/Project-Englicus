import { Heading as Component } from '@component/atom/text'

export default {
  title: 'UI Web/atom/Text/Heading',
  component: Component,
  argTypes: {
    element: {
      options: ['h1', 'h2', 'h3', 'h4', 'p'],
      control: { type: 'radio' }
    }
  }
}

export const Heading = (args) => <Component {...args} />

Heading.args = {
  children: 'Title',
  element: 'h3'
}
