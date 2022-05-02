import { Icon as Component } from '@component/atom/icon/Icon'

export default {
  title: 'UI Web/atom',
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
