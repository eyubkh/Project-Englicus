import styled from 'styled-components'
import { HeroText } from '../molecule/HeroText.jsx'
import { Header } from '../molecule/Header'
import { ColorNeutralDark200 } from '@token:js'
import Test from '@asset/start_test1.svg'

const Component = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'world text text';
  padding: 0 10%;
  background-color: ${ColorNeutralDark200};
  background-image: url(${Test}) !important;
  background-position: center;
  background-repeat: repeat-x;

  @media (max-width: 900px) {
    grid-template-areas: 'text text text';
  }
`

const World = styled.div`
  width: 100%;
  height: 100vh;
  display:  flex;
  justify-content:  center;
  align-items: center ;
  grid-area: world;
  @media (max-width: 900px) {
    display: none;
    background-color:  yellow ;
  }
`

const Moon  = () => {
  return (<svg width="70mm" height="70mm" version="1.1" viewBox="0 0 53.35 53.35" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate(-143.47 -37.389)">
    <circle cx="170.15" cy="64.064" r="26.675" style={{fill:'#838383'}}/>
    <circle cx="166.5" cy="69.793" r="1.0543" style={{fill:"#f8f8f8"}}/>
    <circle  cx="182.46" cy="52.854" r=".56228" style={{fill:"#f8f8f8"}}/>
    <circle  cx="174.73" cy="43.436" r="1.8274" style={{fill:"#f8f8f8"}}/>
    <circle  cx="159.05" cy="54.471" r="1.3354" style={{fill:"#f8f8f8"}}/>
    <circle cx="183.65" cy="73.869" r="4.2874" style={{fill:"#f8f8f8"}}/>
    <circle  cx="156.66" cy="79.211" r="1.0543" style={{fill:"#f8f8f8"}}/>
    <circle cx="152.31" cy="69.793" r="2.7411" style={{fill:"#f8f8f8"}}/>
    <circle cx="169.03" cy="79.07" r="2.6005" style={{fill:"#f8f8f8"}}/>
  </g>
  </svg>)
}


export const Hero = () => {
  return (
    <Component>
      <Header absolute />
      <World>
        <Moon />
      </World>
      <HeroText />
    </Component>
  )
}
