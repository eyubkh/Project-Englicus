import styled from 'styled-components'
import { Logo } from '../Atoms/Logo/Logo'
import { Icon } from '../Atoms/Icons/Icon'
import { ColorNeutralDark200 } from '@tokens/js/_variables'
import { Link } from 'react-router-dom'
import { HOME } from '@navigation/CONSTANS'

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
      <Link to={HOME}>
        <Logo />
      </Link>
      <Icon icon='lang' size='40px' />
    </Component>
  )
}
