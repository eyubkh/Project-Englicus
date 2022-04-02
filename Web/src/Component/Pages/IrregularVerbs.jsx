import { useDispatch } from "react-redux"
import { initalState } from '../../Redux/action/dataAction'

const IrregularVerbs = () => {
  const dispatch = useDispatch()
  dispatch(initalState())

  return (
    <>
    <h1>Irregular Verbs the game, only for 9.99$!</h1>
    </>
  )
}

export default IrregularVerbs
