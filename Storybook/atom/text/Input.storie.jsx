import { TextField as Component } from '@component/atom/text'

export default {
  title: 'UI Web/atom/Text',
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
