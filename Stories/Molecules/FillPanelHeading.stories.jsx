import { FillPanelHeading as Component } from '@components/Molecules/FillPanelHeading'

export default {
  title: 'UI Web/Molecules',
  component: Component
}

const Template = (args) => <Component {...args} />
export const FillPanelHeading = Template.bind()

FillPanelHeading.args = {
  children: 'heading'
}