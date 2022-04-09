import styled from 'styled-components'

const Component = styled.div`
  width: 200px;
  height: 140px;
  background-color: orangered;
  display: flex;
  justify-content: center;
  justify-self: center;
  align-items: center;
  border-radius: 4px;
`

export const Panel = ({ children }) => {
  return <Component >{children}</Component>
}
