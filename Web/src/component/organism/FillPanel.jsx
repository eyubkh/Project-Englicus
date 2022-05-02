import { useEffect } from 'react'
import styled from 'styled-components'
import { FillPanelVerb } from '../molecule/FillPanelVerb'
import { useSelector, useDispatch } from 'react-redux'
import { textFieldValue } from '@redux/action/metaAction'
import { FillPanelHeading } from '../molecule/FillPanelHeading'

const Component = styled.section`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const FillPanel = () => {
  useEffect(() => {
    const input = window.document.getElementsByTagName('input')[0]
    input.focus()
    window.addEventListener('keydown', (event) => {
      const button = window.document.getElementsByClassName('enter')[0]
      if (event.key === 'Enter') {
        button.focus()
        button.click()
        input.focus()
      }
    })
  }, [])
  const dispatch = useDispatch()
  const { current, meta } = useSelector(({ data, meta }) => {
    return {
      current: data.api[data.current],
      meta
    }
  })
  const changeHandler = ({ target }) => {
    dispatch(textFieldValue(target.value))
  }
  return (
    <>
    <Component>
      <FillPanelHeading >
        {current?.translation.es}
      </FillPanelHeading>
      <FillPanelVerb
        text={{
          title: 'infinitive',
          verb: current?.infinitive
        }}

      />
      <FillPanelVerb
        text={{ title: 'past' }}
        field={{
          ...meta,
          handler: changeHandler
        }}
      />
      <FillPanelVerb
        text={{
          title: 'participle',
          verb: current?.participle
        }}
      />
    </Component>
    </>
  )
}
