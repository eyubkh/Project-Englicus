import { ColorBrandSecondary, TokenFontWeightBold } from '@tokens'
import styled from 'styled-components'

const InputUserComponent = styled.input`
  font-size: 2.75rem;
  font-weight: ${TokenFontWeightBold};
  border: none;
  width: 230px;
  border-bottom: 4px solid ${ColorBrandSecondary};
  outline: none;
  padding: 5px 15px;
  background-color: transparent;
  text-align: center;
  :disabled {
    background-color:  hsla(0, 0%, 9%,0.1);
    cursor: not-allowed;
    border-bottom: 4px solid ${ColorBrandSecondary};
  }
`

export const InputUser = ({ isDisabled, ...rest }) => {
  console.log(isDisabled, rest)
  return <InputUserComponent disabled={isDisabled}></InputUserComponent>
}
