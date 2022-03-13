import { Button } from '@components/Atoms/Buttons/Button'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'UI Web/Atoms/Buttons/Button',
  component: Button,
  decorators: [withDesign]
}

export const ButtonComponent = (args) => <Button {...args}></Button>

ButtonComponent.args = {
  text: 'hola'
}

ButtonComponent.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/67LuQ7nQzcKvGbqG5BRMTC/Design-System-Englicus?node-id=110%3A89'
  }
}
