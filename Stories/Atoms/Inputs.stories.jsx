import { InputUser } from '@components/Atoms/Inputs/InputUser'

export default {
  title: 'UI Web/Atoms/Inputs',
  component: InputUser,
  argType: {
    isDisabled: {
      options: Boolean

    }
  }
}
const Template = (args) => <InputUser {...args} />
export const Input = Template.bind({})
Input.args = {
  isDisabled: false
}
