import { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux"
import { initalState } from '@redux/action/dataAction'
import { FillPanel } from '../../Organisms/FillPanel'
import { FooterCheck } from '../../Organisms/FooterCheck'
import { ProgressBar } from '../../Molecules/ProgressBar'


const Component =  styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Fill = () => {
  useEffect(() => {
    window.addEventListener('keydown', (event) => {
      if(event.key === 'Enter') {
        const button = window.document.getElementsByClassName('enter')[0]
        setInterval(() =>{
          // button.click()
        }, 100)
      }
    })
  }, [])
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

export default Fill
