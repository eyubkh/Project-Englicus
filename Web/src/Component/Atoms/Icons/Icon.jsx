import styled from 'styled-components'
import Svg from './Svg'

const CircleXMarkConteiner = styled.div`
  width: ${(props) => props.size ? `${props.size}px` : '50px'};
`

export const Icon = ({ fill, size, icon }) => {
  return (
    <CircleXMarkConteiner size={size}>
      { Svg[icon] ? Svg[icon](fill) : 'Chose icon' }
    </CircleXMarkConteiner>
  )
}
