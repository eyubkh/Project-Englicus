import styled from 'styled-components'
import { 
  TextContainer, 
  TextStyle, 
  Heading 
} from '../Atoms/Text'

const Component = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export const FillPanelHeading = ({ children }) => {
  return (
    <Component>
      <TextContainer>
        <Heading element='h3'>
          <TextStyle variant="purple">
            { children }
          </TextStyle>
        </Heading>
      </TextContainer>
    </Component>
  )
}