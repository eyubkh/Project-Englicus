import styled from 'styled-components'
import { TokenBorderRadiusBar, ColorNeutralGrey100, ColorActionSuccess100 } from '@tokens/js/_variables'
import { useSelector } from 'react-redux'

const Component = styled.div`
  position: relative;
  width: 50%;
  height: 10px;
  background: ${ColorNeutralGrey100};
  border-radius: ${TokenBorderRadiusBar};
  margin-left: 20px;
  overflow: hidden;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${(props) => props.progress ? props.progress + '%' : '0%'};
    height: 100%;
    transition: all .2s;
    background-color: ${ColorActionSuccess100};
  }
`

export const Bar = () => {
  const { progressBar } = useSelector(state => state.meta)
  return <Component progress={progressBar.progress}  />
}