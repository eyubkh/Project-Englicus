import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"
import { initalState } from '@redux/action/dataAction'
import { FillPanel } from '../Molecules/FillPanel'
import { FooterCheck } from '../Organisms/FooterCheck'
import { ProgressBar } from '../Molecules/ProgressBar'

const Component =  styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const IrregularVerbs = () => {
  const dispatch = useDispatch()
  dispatch(initalState())

  return (
    <Component>
      <ProgressBar />
      <FillPanel />
      <FooterCheck />
    </Component>
  )
}

export default IrregularVerbs
