import { Button as Component } from '@component/atom/button/Button'

export default {
  title: 'UI Web/atom',
  component: Component,
  argTypes: {
    variant: {
      options: ['Success', 'Error', 'Transparent', 'Default'],
      control: { type: 'radio' }
    }
  }

}

export const Button = (args) => <Component {...args}></Component>

Button.args = {
  children: 'Default',
  variant: 'default'
}
