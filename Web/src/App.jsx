import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RouterConfig } from '@navigation'
import store from './redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <RouterConfig />
      </Router>
    </Provider>
  )
}

export default App
