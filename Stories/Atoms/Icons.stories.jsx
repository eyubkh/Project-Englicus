import { Icon as Component } from '@components/Atoms/Icons/Icon'

export default {
  title: 'UI Web/Atoms',
  component: Component,
  argTypes: {
    icon: {
      options: ['CircleCheck', 'XMark', 'Lang', 'CircleXMark', 'Error icon'],
      control: { type: 'radio' }
    }
  }
}

export const Icon = (args) => <Component {...args} />

Icon.args = {
  icon: 'circleCheck',
  size: '120px'
}
