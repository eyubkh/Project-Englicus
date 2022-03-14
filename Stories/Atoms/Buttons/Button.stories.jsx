import { Button } from '@components/Atoms/Buttons/Button'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'UI Web/Atoms/Buttons/Button',
  component: Button,
  decorators: [withDesign]

}

export const ButtonDefault = (args) => <Button {...args}></Button>

ButtonDefault.args = {
  text: 'Default'
}
export const ButtonSucess = (args) => <Button {...args}></Button>

ButtonSucess.args = {
  text: 'Continue',
  sucess: true
}
export const ButtonError = (args) => <Button {...args}></Button>

ButtonError.args = {
  text: 'Continue',
  error: true
}

export const ButtonTransparent = (args) => <Button {...args}></Button>

ButtonTransparent.args = {
  text: 'Skip',
  transparent: true
}

export const ButtonCheck = (args) => <Button {...args}></Button>

ButtonCheck.args = {
  text: 'Check',
  sucess: true,
  border: true
}

ButtonDefault.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/67LuQ7nQzcKvGbqG5BRMTC/Design-System-Englicus?node-id=110%3A89'
  }
}
