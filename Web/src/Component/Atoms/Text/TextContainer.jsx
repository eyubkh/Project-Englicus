import styled from 'styled-components'

const Component = styled.div`
  max-width: 450px;
  & > p {
    margin-bottom: 2rem;
  }
`
export const TextContainer = ({ children, spacing }) => {
  return (
    <Component spacing={spacing}>
      {children}
    </Component>
  )
}
