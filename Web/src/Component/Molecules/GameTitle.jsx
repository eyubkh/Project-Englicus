import styled from 'styled-components'
import { Heading } from '../Atoms/Text'

const Component = styled.div`
  text-align: center;
  margin: 20px 0;
`

export const GameTitle = () => {
  return (
    <Component>
      <Heading
        element='h3'
      >Irregular Verbs</Heading>
    </Component>
  )
}