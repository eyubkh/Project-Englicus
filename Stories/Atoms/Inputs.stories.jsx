import { InputUser } from '@components/Atoms/Inputs/InputUser'

export default {
  component: InputUser,
  title: 'UI Web/Atoms/Inputs'
}
const Input = (args) => <InputUser {...args} />
export const InputDisabled = Input.bind({})
InputDisabled.args = {
  isDisabled: true
}
export const InputDefault = Input.bind({})
