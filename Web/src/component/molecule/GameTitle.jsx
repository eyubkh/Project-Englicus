import styled from 'styled-components'
import { Heading } from '../atom/text'
import { ColorNeutralDark200 } from '@token:js'

const Component = styled.div`
  text-align: center;
  margin-top: 32px;
  display: flex;
  align-items: center;
  :after {
    content: '';
    width: 95%;
    height: 7px;
    background-color: ${ColorNeutralDark200};
    margin-left: 20px;
    border-radius: 0px 10px 10px 0px;
  }
  :before {
    content: '';
    width: 95%;
    height: 7px;
    background-color: ${ColorNeutralDark200};
    border-radius: 10px 0px 0px 10px ;
    margin-right: 20px;
  }
`

export const GameTitle = ({ children }) => {
  return (
    <Component>
      <Heading
        element='h3'
      >
        { children }
      </Heading>
    </Component>
  )
}
