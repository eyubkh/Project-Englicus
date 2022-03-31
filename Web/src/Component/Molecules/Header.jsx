import { Logo } from '@components/Atoms/Logo/Logo'
import { Icon } from '@components/Atoms/Icons/Icon'
import styled from 'styled-components'
import { ColorNeutralDark200 } from '@tokens/js/_variables'

const Component = styled.header`
  position: ${props => props.absolute ? 'absolute' : 'none'};
  display: flex;
  width: 100%;
  background-color: ${ColorNeutralDark200};
  left: 0;
  top: 0;
  padding: 20px 10%;
  justify-content: space-between;
  align-items: center;
`
export const Header = ({ ...args }) => {
  return (
    <Component {...args}>
      <Logo />
      <Icon icon='lang' size='40px' />
    </Component>
  )
}
