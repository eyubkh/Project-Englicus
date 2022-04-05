import { TextField as Component } from '@components/Atoms/Text'

export default {
  title: 'UI Web/Atoms/Text',
  component: Component,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' }
    }
  }
}

export const TextField = (args) => <Component {...args} />

TextField.args = {
  isDisabled: false
}
