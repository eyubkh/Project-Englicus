import { Button as Component } from '@components/Atoms/Buttons/Button'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'UI Web/Atoms',
  component: Component,
  decorators: [withDesign],
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

Button.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/67LuQ7nQzcKvGbqG5BRMTC/Design-System-Englicus?node-id=110%3A89'
  }
}
