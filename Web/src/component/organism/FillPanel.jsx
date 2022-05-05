import styled from 'styled-components'
import { FillPanelVerb } from '../molecule/FillPanelVerb'
import { useSelector, useDispatch } from 'react-redux'
import { textField } from '@redux/meta/metaSlice'
import { FillPanelHeading } from '../molecule/FillPanelHeading'
import { useEffect } from 'react'

const Component = styled.section`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const FillPanel = () => {
  useEffect(() => {
    const handler = (event) => {
      const button = window.document.getElementsByClassName('enter')[0]
      input.focus()
      if (event.key === 'Enter') {
        button.focus()
        button.click()
      }
    }
    const input = window.document.getElementsByTagName('input')[0]
    input.focus()
    window.addEventListener('keydown', handler)
    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [])
  const dispatch = useDispatch()
  const { current, meta } = useSelector(({ data, meta }) => {
    return {
      current: data.api[data.current],
      meta
    }
  })
  const changeHandler = ({ target }) => {
    dispatch(textField(target.value))
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
