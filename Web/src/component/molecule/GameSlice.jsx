import styled from 'styled-components'
import { Panel } from '../atom/Panel'
import { Link } from 'react-router-dom'
import { IRREGULARVERB } from '@navigation/CONSTANS'
import { DisplayText, TextStyle } from '../atom/text'

const Component = styled.div`
  width: fit-content;
  padding: 32px 0px;
  text-align: center;
  & p:first-of-type {
    margin-top: 16px;
  }
`
export const GameSlice = () => {
  return (
    <Component>
      <Link
        to={IRREGULARVERB}
        style={{ textDecoration: 'none' }}
      >
        <Panel>
          Fill
        </Panel>
      </Link>
        <DisplayText size='s'>
          Fill the gaps!
        </DisplayText>
    </Component>
  )
}
