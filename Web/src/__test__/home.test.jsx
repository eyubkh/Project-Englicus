import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Home from '../Component/Pages/Home'

describe('Home/', () => {
  test('Engilcus logo catched', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Englicus'))
  })
})
