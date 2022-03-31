import { TextStyle as Component } from '@components/Atoms/Text/TextStyle'

export default {
  title: 'UI Web/Atoms/Text',
  component: Component,
  argTypes: {
    variant: {
      options: ['Success', 'Error', 'Bold', 'Default'],
      control: { type: 'radio' }
    }
  }
}

export const TextStyle = (args) => <Component {...args} />

TextStyle.args = {
  children: 'example text',
  variant: 'Bold'
}
