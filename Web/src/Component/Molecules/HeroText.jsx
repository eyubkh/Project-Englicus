import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { DisplayText, TextContainer } from '../Atoms/Text'
import { Button } from '../Atoms/Buttons/Button'
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
        ¡Improve your english with Englicus gradually!
        </DisplayText>
        <Link to={LEARN}>
          <Button variant="Default">Start</Button>
        </Link>
      </TextContainer>
    </Component>
  )
}
