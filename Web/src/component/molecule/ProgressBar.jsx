import styled from 'styled-components'
import { Icon } from '../atom/icon/Icon'
import { Link } from 'react-router-dom'
import { LEARN } from '@navigation/CONSTANS'
import { useSelector, useDispatch } from 'react-redux'
import { Bar } from '../atom/Bar'
import { reset } from '@redux/meta/metaSlice'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
`

export const ProgressBar = () => {
  const { progressBar } = useSelector(state => state.meta)
  const dispatch = useDispatch()
  const exitHandler = () => {
    dispatch(reset())
  }
  return (
    <Component>
      <Link
        to={LEARN}
        onClick={exitHandler}
      >
        <Icon size='20px' icon='XMark' />
      </Link>
      <Bar progress={progressBar} />
    </Component>
  )
}
