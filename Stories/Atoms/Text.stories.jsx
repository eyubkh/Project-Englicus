import { Heading } from '@components/Atoms/Text/Heading'
import '@web/style.css'

export default {
  component: Heading,
  title: 'UI Web/Atoms/Text'
}

const Template = (args) => <Heading {...args}></Heading>

export const Heading1 = Template.bind({})

Heading1.args = {
  children: 'Heading 1',
  element: 'h1'
}
export const Heading2 = Template.bind({})

Heading2.args = {
  children: 'Heading 2',
  element: 'h2'
}
export const Heading3 = Template.bind({})

Heading3.args = {
  children: 'Heading 3',
  element: 'h3'
}
export const Heading4 = Template.bind({})

Heading4.args = {
  children: 'Heading 4',
  element: 'h4'
}
