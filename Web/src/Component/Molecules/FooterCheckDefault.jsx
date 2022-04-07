import { useDispatch } from "react-redux"
import { Button } from '../Atoms/Buttons/Button'
import { isChecking, isCorrect, textFieldValue } from '@redux/action/metaAction'
import { changeCurrent } from '@redux/action/dataAction'
import { barProgress } from '@redux/action/progressAction'

export const FooterCheckDefault = ({ state }) => {
  const dispatch = useDispatch()
  
  const checkHandler = () => {
    const test = state.meta.textFieldValue === state.current.past
    if(test) {
      dispatch(barProgress())
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