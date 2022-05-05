import { useDispatch } from 'react-redux'
import { Button } from '../atom/button/Button'
import { changeCurrent } from '@redux/data/dataSlice'
import { isChecking, progressBar, isCorrect, textField } from '@redux/meta/metaSlice'

export const FooterCheckDefault = ({ state }) => {
  const dispatch = useDispatch()

  const checkHandler = () => {
    const test = state.meta.textField === state.current.past
    if (test) {
      dispatch(progressBar(100 / state.data.apiLength))
      dispatch(isCorrect(true))
    }
    dispatch(isChecking(true))
  }

  const skipHandler = () => {
    dispatch(changeCurrent())
    dispatch(textField(''))
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
