import { Heading } from '@components/Atoms/Text/Heading'
import { DisplayText } from '@components/Atoms/Text/DispalyText'
import { TextContainer } from '@components/Atoms/Text/TextContainer'
import { TextStyle } from '@components/Atoms/Text/TextStyle'

export default {
  title: 'UI Web/Atoms/Text',
  argTypes: {
    element: {
      options: ['h1', 'h2', 'h3', 'h4', 'p'],
      control: { type: 'radio' }
    },
    size: {
      optinos: ['l']
    }
  }
}

const HeaderTemplate = (args) => <Heading {...args}></Heading>

export const Header = HeaderTemplate.bind({})

Header.args = {
  children: 'Heading',
  element: 'h2'
}

/// Text dispaly

const DisplayTextTemplate = (args) => <DisplayText {...args} />

export const Display = DisplayTextTemplate.bind()

Display.args = {
  size: 'm',
  children: 'Text contenent example'
}

/// Text Container

export const Container = () => {
  return (
    <TextContainer>
      <Header element='h3'>
        Title Example
      </Header>
      <DisplayText size='m'>
        Text contenent example
      </DisplayText>
    </TextContainer>
  )
}

/// Style Text

const TextStyleTemplate = (args) => <TextStyle {...args} />

export const Style = TextStyleTemplate.bind()

Style.args = {
  children: 'example text',
  variant: 'bold'
}
