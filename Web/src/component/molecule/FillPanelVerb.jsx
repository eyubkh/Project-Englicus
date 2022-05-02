import {
  TextContainer,
  TextStyle,
  Heading,
  TextField
} from '../atom/text'

export const FillPanelVerb = ({ field, text }) => {
  return (
    <TextContainer center>
      <TextStyle bold variant='grey' >
        { text.title }
      </TextStyle>
      {
        field
          ? <TextField
              value={field.textFieldValue}
              handler={field.handler}
              isDisabled={field.isChecking}
            />
          : (
            <Heading element='h3'>
              { text.verb }
            </Heading>
            )
      }
    </TextContainer>
  )
}
