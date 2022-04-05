import { addDecorator } from "@storybook/react"
import { MemoryRouter } from "react-router"
import { Provider } from 'react-redux'
import store from "@redux/store"

addDecorator(story => {
  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        {story()}
      </MemoryRouter>
    </Provider>
    )
})

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}