import styled from 'styled-components'
import { HeroText } from '../Molecules/HeroText.jsx'
import { World } from '@web/three/World'
import { Header } from '../Molecules/Header'
import { ColorNeutralDark200 } from '@tokens/js/_variables'
import Svg from '@assets/stars.svg'

const Component = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'world text text';
  padding: 0 10%;

  background-color: ${ColorNeutralDark200};
  background-image: url(${Svg});
  background-position: center;
  background-size: 80rem;
`

export const Section = () => {
  return (
    <Component>
      <Header absolute />
      <World />
      <HeroText />
    </Component>
  )
}
