import { Button } from '../Atoms/Buttons/Button'
import { Icon } from '../Atoms/Icons/Icon'
import { useDispatch } from 'react-redux'
import { textFieldValue, isCorrect, isChecking } from '@redux/action/metaAction'
import { correct } from '@redux/action/dataAction'

export const FooterCheckStatus = ({ state }) => {
  const dispatch = useDispatch()
  const continueHandler = () => {
    if(state.meta.isCorrect){
      dispatch(correct())
    }
    dispatch(isChecking(false))
    dispatch(isCorrect(false))
    dispatch(textFieldValue(''))
  }
  return (
    <>
      <Icon size='80px' icon={
        state.meta.isCorrect
        ? 'CircleCheck'
        : 'CircleXMark'
      } />
      <Button
        handler={continueHandler}
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