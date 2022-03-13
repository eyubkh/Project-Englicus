
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../App.jsx'

test('two plus two is four', () => {
  const { getByText } = render(<App />)
  expect(getByText('Hello!'))
})
