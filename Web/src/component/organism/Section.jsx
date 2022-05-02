import styled from 'styled-components'
import { HeroText } from '../molecule/HeroText.jsx'
import { World } from '@web/three/World'
import { Header } from '../molecule/Header'
import { ColorNeutralDark200 } from '@token:js'
import Svg from '@asset/stars.svg'

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
