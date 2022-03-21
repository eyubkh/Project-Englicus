import styled from 'styled-components'

const Template = styled.p`
  color:red;
`
export const Heading = ({ children, element }) => {
  return <Template as={element}>{children}</Template>
}
