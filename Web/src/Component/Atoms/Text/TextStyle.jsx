import { TokenFontWeightBold, ColorActionError300, ColorNeutralLight100, ColorNeutralDark300, ColorActionSuccess300 } from '@tokens/js/_variables'
import styled from 'styled-components'

const Component = styled.span`
  color: ${props => {
    switch (props.variant) {
      case 'success':
        return ColorActionSuccess300
      case 'error':
        return ColorActionError300
      case 'bold':
        return ColorNeutralDark300
      default:
        return ColorNeutralLight100
    }
  }};
  font-weight: ${props => props.variant === 'bold' ? TokenFontWeightBold : 'none'};
`
export const TextStyle = ({ children, ...args }) => {
  const rules = ['Success', 'Error', 'Bold', 'Default']
  if (!rules.includes(args.variant)) {
    console.warn(`Text Stlye variant given (: ${args.variant} :) there isn't into rules [${rules}]`)
    args.variant = 'Default'
  }
  args.variant = args.variant.toLowerCase()
  return <Component {...args}>{children}</Component>
}
