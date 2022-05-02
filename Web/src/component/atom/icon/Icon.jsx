
import { ColorBrandSecondary, ColorActionError200, ColorNeutralGrey200, ColorActionSuccess200 } from '@token:js'
import styled from 'styled-components'
import Svg from './Svg'

const Component = styled.div`
  width: ${(props) => props.size ? `${props.size}` : '50px'};
`

export const Icon = ({ size, icon }) => {
  let fill = ColorNeutralGrey200
  icon = icon.toLowerCase()
  switch (icon) {
    case 'circlecheck':
      fill = ColorActionSuccess200
      break
    case 'lang':
      fill = ColorBrandSecondary
      break
    case 'circlexmark':
      fill = ColorActionError200
      break
    default:
      fill = ColorNeutralGrey200
  }
  return (
    <Component size={size}>
      { Svg[icon] ? Svg[icon](fill) : 'Chose icon' }
    </Component>
  )
}
