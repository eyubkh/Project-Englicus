import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { initialState } from '@redux/action/dataAction'
import { FillPanel } from '../../Organisms/FillPanel'
import { FooterCheck } from '../../Organisms/FooterCheck'
import { ProgressBar } from '../../Molecules/ProgressBar'
import { Loading } from '../Loading'


const Component =  styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Fill = () => {
  const dispatch = useDispatch()
  const state = useSelector(state => state.data.isLoading)
  useEffect(() => {
    dispatch(initialState())
  }, [])
  
  return (
    <>
      {
        state 
        ? <Loading />
        : <Component>
            <ProgressBar />
            <FillPanel />
            <FooterCheck />
          </Component>
      }
    
    </>
  )
}

export default Fill

