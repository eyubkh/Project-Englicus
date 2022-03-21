import styled from 'styled-components'
import { ColorBrandPrimary, TokenFontSizeL, TokenFontWeightSemiBold, TokenLineHeightM } from '@tokens/js/_variables'

const LogoComponent = styled.p`
  text-transform: uppercase;
  font-weight: ${TokenFontWeightSemiBold};
  font-size: ${TokenFontSizeL}px;
  line-height: ${TokenLineHeightM};

  span {
    color: ${ColorBrandPrimary};
  }
`

export const Logo = () => {
  return <LogoComponent><span>eng</span>licus</LogoComponent>
}
