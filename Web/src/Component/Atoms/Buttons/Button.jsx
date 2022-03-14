import styled from 'styled-components'
import {
  TokenSpacingM,
  TokenSpacingXl,
  TokenFontWeightRegular,
  TokenFontSizeS,
  ColorActionError,
  ColorActionSuccess,
  ColorBrandSecondary,
  ColorNeutralLight1,
  ColorNeutralDark1
} from '@tokens'

const ButtonComponent = styled.button`
  border-radius: .3rem;
  border: ${props => props.transparent ? `solid 3px ${ColorBrandSecondary}` : 'none'};
  padding: ${TokenSpacingM}px ${TokenSpacingXl}px;
  font-weight: ${TokenFontWeightRegular};
  font-size: ${TokenFontSizeS}px;
  text-transform: uppercase;
  background-color: ${props => props.sucess
    ? ColorActionSuccess
    : props.error
    ? ColorActionError
    : props.transparent
    ? 'transparent'
    : ColorBrandSecondary
  };
  box-shadow: 0px 4px ${props => props.sucess
    ? ColorActionSuccess
    : props.error
    ? ColorActionError
    : props.transparent
    ? 'transparent'
    : ColorBrandSecondary
  };
  color: ${props => {
      if (props.sucess || props.error) {
        return ColorNeutralLight1
      } else if (props.transparent) {
        return ColorBrandSecondary
      }
      return ColorNeutralDark1
    }
  };

`
export const Button = ({ text, ...args }) => {
  return <ButtonComponent {...args}>{text}</ButtonComponent>
}
