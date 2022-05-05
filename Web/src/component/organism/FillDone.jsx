import styled from 'styled-components'
import { Publicity } from '../molecule/Publicity'
import { FillDoneText } from '../molecule/FillDoneText'
import { ProgressBar } from '@component/molecule/ProgressBar'

const Component = styled.div`
  width:  100vw;
  height: 100vh;
  display: grid;
  justify-items: center ;
  align-items: center ;
  grid-template-columns: 1fr 100px 1fr;
`
 const Rotate = styled.div`
  rotate:  90deg;
  width: 100vh;
  
 `

export const FillDone = () => {
  return (
    <Component>
      <FillDoneText />
      <Rotate>
        <ProgressBar />
      </Rotate>
      <Publicity />
    </Component>
  )
}
