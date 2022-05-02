import { FillPanelHeading as Component } from '@component/molecule/FillPanelHeading'

export default {
  title: 'UI Web/molecule',
  component: Component
}

const Template = (args) => <Component {...args} />
export const FillPanelHeading = Template.bind()

FillPanelHeading.args = {
  children: 'heading'
}
