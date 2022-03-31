import { TextField as Component } from '@components/Atoms/Inputs/TextField'

export default {
  title: 'UI Web/Atoms',
  component: Component,
  argTypes: {
    isDisabled: {
      control: { type: 'boolean' }
    }
  }
}

export const Input = (args) => <Component {...args} />

Input.args = {
  isDisabled: false
}
