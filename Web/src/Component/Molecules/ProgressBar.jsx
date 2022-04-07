import styled from 'styled-components'
import { Icon } from '../Atoms/Icons/Icon'
import { TokenBorderRadiusBar, ColorNeutralGrey100, ColorActionSuccess100 } from '@tokens/js/_variables'
import { Link } from 'react-router-dom'
import { LEARN } from '@navigation/CONSTANS'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '@redux/action/metaAction'
import { barReset } from '@redux/action/progressAction'

const Bar = styled.div`
  position: relative;
  width: 50%;
  height: 10px;
  background: ${ColorNeutralGrey100};
  border-radius: ${TokenBorderRadiusBar};
  margin-left: 20px;
  overflow: hidden;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.progress ? props.progress + '%' : '0%'};
    height: 100%;
    transition: all .2s;
    background-color: ${ColorActionSuccess100};
  }
`

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
  
`

export const ProgressBar = () => {
  const { bar } = useSelector( state => state.progress)
  const dispatch = useDispatch()
  const exitHandler = () => {
    dispatch(reset())
    dispatch(barReset())
  }
  return (
    <Component>
      <Link 
        to={LEARN}
        onClick={exitHandler}
      >
        <Icon size='20px' icon='XMark' />
      </Link>
      <Bar progress={bar.progress}  />
    </Component>
  )
}