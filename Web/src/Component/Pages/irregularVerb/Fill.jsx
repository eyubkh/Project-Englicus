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
    const input = window.document.getElementsByTagName('input')[0]
    window.addEventListener('keydown', (event) => {
      const button = window.document.getElementsByClassName('enter')[0]
      if(event.key === 'Enter') {
          button.focus()
          button.click()
          input.focus()
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
