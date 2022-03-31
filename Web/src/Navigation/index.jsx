import { Routes, Route } from 'react-router-dom'
import { HOME, LEARN } from './CONSTANS'
// Components
import Home from '@components/Pages/Home'
import Learn from '@components/Pages/Learn'
import NotFound from '@components/Pages/NotFound'

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LEARN} element={<Learn />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
