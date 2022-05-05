import styled from 'styled-components'
import { GameSlice } from '../molecule/GameSlice'
import { GameTitle } from '../molecule/GameTitle'

const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Margin = styled.div`
  width: 800px ;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100vw;
    margin: 0;
    padding: 0 40px;
  }
`

export const GameSection = () => {
  return (
    <Margin>
      <GameTitle >
        Irregular verbs
      </GameTitle>
      <Component>
        <GameSlice />
      </Component>
    </Margin>
  )
}
