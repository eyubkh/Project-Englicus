import styled from 'styled-components'

const Component = styled.div`
display: flex;
flex-direction: column;
`
export const TextContainer = ({ children, spacing }) => {
  return (
    <Component spacing={spacing}>
      {children}
    </Component>
  )
}
