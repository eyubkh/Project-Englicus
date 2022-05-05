import styled from 'styled-components'
import { DisplayText } from '../atom/text'
import { Icon } from '../atom/icon/Icon'
import { useDispatch } from 'react-redux'
import { fetchBasicVerbs } from '@redux/data/dataSlice'
import { reset } from '@redux/meta/metaSlice'

const Component = styled.div`
  display: flex ;
  flex-direction: column ;
  justify-content: center ;
  align-items: center ;
  & p {
    margin-bottom: 16px;
  }

`

export const FillDoneText = () => {
  const dispatch = useDispatch()
  const restartHandler = () => {
    dispatch(reset())
    dispatch(fetchBasicVerbs())
  }
  return (
    <Component>
      <DisplayText size='s'>
        &quot; Thanks for play! &quot;
      </DisplayText>
      <Icon
        handler={restartHandler}
        icon='rotate'
        size='32px'
      />
    </Component>
  )
}
