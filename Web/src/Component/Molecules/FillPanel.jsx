import styled from 'styled-components'
import { Heading, TextField, TextContainer, TextStyle } from '../Atoms/Text'
import { useSelector, useDispatch } from 'react-redux'
import { textFieldValue } from '@redux/action/metaAction'

const Component = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FillPanel = () => {
  const dispatch = useDispatch()
  const state = useSelector(({ data, meta }) => {
    return {
      current:  data.api[data.current],
      meta
    }
  })
  const changeHandler = ({ target }) => {
    dispatch(textFieldValue(target.value))
  }
  return (
    <>
      <Component>
        {/****  INFINITIVE ****/}
        <TextContainer center>
          <TextStyle bold variant='grey' >
            infinitive
          </TextStyle>
          <Heading element='h3'> 
            { state.current?.infinitive }
          </Heading>
        </TextContainer>

        {/****  PAST ****/}
        <TextContainer center>
          <TextStyle bold variant='grey'>
            past
          </TextStyle>
          <TextField 
            value={state.meta.textFieldValue}  
            handler={changeHandler} 
            isDisabled={state.meta.isChecking}
          />
        </TextContainer>
        
        {/****  PARTICIPLE ****/}
        <TextContainer center>
          <TextStyle bold variant='grey' >
            participle
          </TextStyle>
          <Heading element='h3'> 
            { state.current?.participle }
          </Heading>
        </TextContainer>
      </Component>
    </>
  )
}