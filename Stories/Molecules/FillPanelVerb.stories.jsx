import { FillPanelVerb as Component } from '@components/Molecules/FillPanelVerb'


export default {
  title: 'UI Web/Molecules',
  component: Component,
  argTypes: {
  }
}

const Template = (args) => <Component {...args} />

export const FillPanelVerb = Template.bind()

FillPanelVerb.args = {
  text: {
    title: 'title',
    verb: 'verb'
  },
  field: {
    handler: () => {},
    value: '',
    isChecking: false
  }
}
