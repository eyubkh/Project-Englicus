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
  border-radius: ${TokenBorderRadiusButton}px;
  border: ${props => props.transparent ? `solid 3px ${ColorBrandSecondary}` : 'none'};
  padding: ${TokenSpacingM}px ${TokenSpacingXl}px;
  font-weight: ${TokenFontWeightRegular};
  font-size: ${TokenFontSizeS};
  text-transform: uppercase;
  background-color: ${props => props.sucess
    ? ColorActionSuccess200
    : props.error
    ? ColorActionError200
    : props.transparent
    ? 'transparent'
    : ColorBrandSecondary
  };
  box-shadow: 0px 4px ${props => props.sucess && props.shadow
    ? ColorActionSuccess300
    : props.error && props.shadow
    ? ColorActionError300
    : 'none'
  };
  color: ${props => {
      if (props.sucess || props.error) {
        return ColorNeutralLight100
      } else if (props.transparent) {
        return ColorBrandSecondary
      }
      return ColorNeutralDark100
    }
  };
  cursor: pointer;
  :hover {
    filter: brightness(110%)
  }
`
export const Button = ({ text, ...args }) => {
  return <ButtonComponent {...args}>{text}</ButtonComponent>
}
