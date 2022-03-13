import { SimpleButton } from '../../../Web/src/Component/Atoms/Buttons/SimpleButton'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'UI Web/Atoms/Buttons/SimpleButton',
  component: SimpleButton,
  decorators: [withDesign],
}

export const Button = (args) => <SimpleButton {...args}></SimpleButton>

Button.args = {
  text: 'hola'
}

Button.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/67LuQ7nQzcKvGbqG5BRMTC/Design-System-Englicus?node-id=110%3A89',
  },
}
