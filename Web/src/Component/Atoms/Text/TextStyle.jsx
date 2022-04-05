import { TokenFontWeightBold, ColorActionError300, ColorNeutralLight100, ColorNeutralDark300, ColorActionSuccess300, ColorNeutralGrey100 } from '@tokens/js/_variables'
import styled from 'styled-components'

const Component = styled.span`
  color: ${props => {
    switch (props.variant) {
      case 'success':
        return ColorActionSuccess300
      case 'error':
        return ColorActionError300
      case 'light':
        return ColorNeutralLight100
      case 'grey':
        return ColorNeutralGrey100
      default:
        return ColorNeutralDark300
    }
  }};
  font-weight: ${props => props.bold ? TokenFontWeightBold : 'none'};
`
export const TextStyle = ({ children, ...args }) => {
  const rules = ['success', 'error', ' light', 'grey',  'default']
  if (!rules.includes(args.variant)) {
    console.warn(`Text Stlye variant given (: ${args.variant} :) there isn't into rules [${rules}]`)
    args.variant = 'default'
  }
  args.variant = args.variant.toLowerCase()
  return <Component {...args}>{children}</Component>
}
