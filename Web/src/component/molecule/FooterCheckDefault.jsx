import { useDispatch } from 'react-redux'
import { Button } from '../atom/button/Button'
import { isChecking, isCorrect, textFieldValue, progressBar } from '@redux/action/metaAction'
import { changeCurrent } from '@redux/action/dataAction'

export const FooterCheckDefault = ({ state }) => {
  const dispatch = useDispatch()

  const checkHandler = () => {
    const test = state.meta.textFieldValue === state.current.past
    if (test) {
      dispatch(progressBar(100 / state.data.apiLength))
      dispatch(isCorrect(true))
    }
    dispatch(isChecking(true))
  }

  const skipHandler = () => {
    dispatch(changeCurrent())
    dispatch(textFieldValue(''))
  }

  return (
    <>
      <Button
        handler={skipHandler}
        variant='transparent'
      >
      Skip
      </Button>
      <Button
        handler={checkHandler}
        variant='success'
        className='enter'
      >
        Check
      </Button>
    </>
  )
}
