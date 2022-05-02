import { DisplayText as Component } from '@component/atom/text'

export default {
  component: Component,
  title: 'UI Web/atom/Text',
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
