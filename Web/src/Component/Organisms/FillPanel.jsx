import styled from 'styled-components'
import { FillPanelVerb } from '../Molecules/FillPanelVerb'
import { useSelector, useDispatch } from 'react-redux'
import { textFieldValue } from '@redux/action/metaAction'
import { FillPanelHeading } from '../Molecules/FillPanelHeading'

const Component = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`
export const FillPanel = () => {
  const dispatch = useDispatch()
  const { current, meta } = useSelector(({ data, meta }) => {
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
        text={{ title: 'past'}} 
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