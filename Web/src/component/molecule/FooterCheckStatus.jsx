import styled from 'styled-components'
import { Button } from '../atom/button/Button'
import { Icon } from '../atom/icon/Icon'
import { useDispatch } from 'react-redux'
import { correct } from '@redux/data/dataSlice'
import { TextStyle, DisplayText } from '../atom/text'
import { isCorrect, textField, isChecking } from '@redux/meta/metaSlice'

const Div = styled.div`
  display: flex ;
  align-items: center;

  & p {
    margin-left: 12px;
  }

`

export const FooterCheckStatus = ({ state }) => {
  const dispatch = useDispatch()
  const continueHandler = () => {
    if (state.meta.isCorrect) {
      dispatch(correct())
    }
    dispatch(isChecking(false))
    dispatch(isCorrect(false))
    dispatch(textField(''))
  }
  return (
    <>
      <Div>
        <Icon
          size='80px'
          icon={
            state.meta.isCorrect
              ? 'CircleCheck'
              : 'CircleXMark'
          }
        />
        <DisplayText size='s'>
          <TextStyle variant={state.meta.isCorrect ? 'success' : 'error'}>
            {
              state.meta.isCorrect
                ? 'Yeees bro!!'
                : '... Wrong bro!'
            }
          </TextStyle>
        </DisplayText>
      </Div>
      <Button
        handler={continueHandler}
        className='enter'
        variant={
          state.meta.isCorrect
            ? 'success'
            : 'error'
        }
      >
        Continue
      </Button>
    </>
  )
}
