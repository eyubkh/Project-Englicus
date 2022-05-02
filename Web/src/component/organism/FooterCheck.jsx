import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { ColorActionSuccess100, ColorActionError100 } from '@token:js'
import { FooterCheckDefault } from '../molecule/FooterCheckDefault'
import { FooterCheckStatus } from '../molecule/FooterCheckStatus'

const Component = styled.footer`
height: 25vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: ${props => {
  if (props.isChecking) {
   return props.isCorrect
    ? ColorActionSuccess100
    : ColorActionError100
  }
  return 'white'
}};
`

export const FooterCheck = () => {
  const state = useSelector(({ data, meta }) => ({
    current: data.api[data.current],
    meta,
    data
  }))

  return (
    <Component
      isChecking={state.meta.isChecking}
      isCorrect={state.meta.isCorrect}
    >
      {
        state.meta.isChecking
          ? <FooterCheckStatus state={state} />
          : <FooterCheckDefault state={state} />
      }
    </Component>
  )
}
