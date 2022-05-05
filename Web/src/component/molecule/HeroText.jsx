import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DisplayText, TextContainer, TextStyle } from '../atom/text'
import { Button } from '../atom/button/Button'
import { LEARN } from '@navigation/CONSTANS'

const Component = styled.div`

    grid-area: text;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`

export const HeroText = () => {
  return (
    <Component>
      <TextContainer >
        <DisplayText size='l'>
          <TextStyle variant='light'>
            ¡Improve your english with Englicus gradually!
          </TextStyle>
        </DisplayText>
        <Link to={LEARN}>
          <Button variant="Default">Start</Button>
        </Link>
      </TextContainer>
    </Component>
  )
}
