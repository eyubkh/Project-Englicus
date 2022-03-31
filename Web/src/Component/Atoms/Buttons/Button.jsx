import styled from 'styled-components'
import {
  TokenSpacingM,
  TokenSpacingXl,
  TokenFontWeightRegular,
  TokenFontSizeS,
  ColorBrandSecondary,
  TokenBorderRadiusButton,
  ColorActionSuccess300,
  ColorActionError300,
  ColorNeutralLight100,
  ColorNeutralDark100,
  ColorActionSuccess200,
  ColorActionError200
} from '@tokens/js/_variables'

const ButtonComponent = styled.button`
  border-radius: ${TokenBorderRadiusButton};
  border: ${props => {
    props.variant = props.variant.toLowerCase()
    return props.variant === 'transparent'
      ? `solid 3px ${ColorBrandSecondary}`
      : 'none'
  }};
  padding: ${TokenSpacingM} ${TokenSpacingXl};
  font-weight: ${TokenFontWeightRegular};
  font-size: ${TokenFontSizeS};
  text-transform: uppercase;
  background-color: ${props => {
    props.variant = props.variant.toLowerCase()
    switch (props.variant) {
      case 'success':
        return ColorActionSuccess200
      case 'error':
        return ColorActionError200
      case 'transparent':
        return 'transparent'
      default:
        return ColorBrandSecondary
      }
  }};
  box-shadow: 0px 4px ${props => {
    props.variant = props.variant.toLowerCase()
    switch (props.variant) {
      case 'success':
        return ColorActionSuccess300
      case 'error':
        return ColorActionError300
      default:
        return 'none'
    }
  }};
  color: ${props => {
    props.variant.toLowerCase()
    switch (props.variant) {
      case 'success':
      case 'error':
        return ColorNeutralLight100
      case 'transparent':
        return ColorBrandSecondary
      default:
        return ColorNeutralDark100
    }
  }};
  cursor: pointer;
  :hover {
    filter: brightness(110%)
  }
`
export const Button = ({ children, ...args }) => {
  return <ButtonComponent {...args}>{children}</ButtonComponent>
}
