import styled from 'styled-components'
import { Slider } from '../Molecules/Slider'
import { GameTitle } from '../Molecules/GameTitle'

const Component = styled.section`
  padding: 0 10%;
`

export const GameSection = () => {
  return (
    <Component>
    <GameTitle />
    <Slider />
    </Component>
  )
}
