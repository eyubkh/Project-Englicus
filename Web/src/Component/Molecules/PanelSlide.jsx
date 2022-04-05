import { Panel } from '../Atoms/Panel/Panel'
import { Link } from 'react-router-dom'
import { IRREGULARVERBS } from '@navigation/CONSTANS'
import styled from 'styled-components'

const Component = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* align-items: stretch; */
  row-gap: 40px;
`

export const PanelSlide = () => {
  return (
    <Component>
      <Link to={IRREGULARVERBS}>
        <Panel>Game 1</Panel>
      </Link>
    </Component>
  )
}
