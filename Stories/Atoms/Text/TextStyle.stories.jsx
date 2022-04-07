import { TextStyle as Component } from '@components/Atoms/Text'

export default {
  title: 'UI Web/Atoms/Text',
  component: Component,
  argTypes: {
    variant: {
      options: ['success', 'error', 'light', 'grey', 'purple' , 'default'],
      control: { type: 'radio' }
    }
  }
}

export const TextStyle = (args) => <Component {...args} />

TextStyle.args = {
  children: 'example text',
  variant: 'Bold'
}
