import styled from 'styled-components'
import { Panel } from '../atom/Panel'
import { Link } from 'react-router-dom'
import { IRREGULARVERB } from '@navigation/CONSTANS'

const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`
export const Slider = () => {
  return (
    <Component>
      <Link to={IRREGULARVERB}>
        <Panel>
          Fill
        </Panel>
      </Link>
      <Panel>  Test </Panel>
      <Panel>  Test </Panel>
    </Component>
  )
}
