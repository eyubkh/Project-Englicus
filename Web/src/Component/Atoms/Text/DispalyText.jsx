import styled from 'styled-components'
import { TokenFontSizeXxl, TokenFontSizeXl, TokenFontSizeL, TokenFontSizeM, TokenFontSizeS, TokenFontSizeXs } from '@tokens/js/_variables'

const Component = styled.p`
  font-size: ${props => {
    props.size.toLowerCase()
    switch (props.size) {
      case 'xxl':
        return TokenFontSizeXxl
      case 'xl':
        return TokenFontSizeXl
      case 'l':
        return TokenFontSizeL
      case 'm':
        return TokenFontSizeM
      case 's':
        return TokenFontSizeS
      case 'xs':
        return TokenFontSizeXs
      default:
        return TokenFontSizeL
    }
  }};
`

export const DisplayText = ({ children, element, size }) => {
  return <Component as={element} size={size}>{children}</Component>
}
