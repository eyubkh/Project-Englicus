import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RouterConfig } from '@navigation'

const App = () => {
  return (
    <Router>
      <RouterConfig />
    </Router>
  )
}

export default App
