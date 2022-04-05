import { DisplayText as Component } from '@components/Atoms/Text'

export default {
  component: Component,
  title: 'UI Web/Atoms/Text',
  argTypes: {
    size: {
      options: ['xxl', 'xl', 'l', 'm', 's', 'xs'],
      control: { type: 'radio' }
    }
  }
}

export const DisplayText = (args) => <Component {...args} />

DisplayText.args = {
  children: 'Text content example',
  size: 'm'
}
