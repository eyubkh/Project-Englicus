import styled from 'styled-components'

const Template = styled.p`
`
export const Heading = ({ children, element, size }) => {
  return <Template size={size} as={element}>{children}</Template>
}
