import { Routes, Route } from 'react-router-dom'
import { HOME, LEARN, IRREGULARVERBS } from './CONSTANS'
// Components
import Home from '@components/Pages/Home'
import Learn from '@components/Pages/Learn'
import Fill from '@components/Pages/irregularVerb/Fill'
import NotFound from '@components/Pages/NotFound'

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={IRREGULARVERBS} element={<Fill />} />
      <Route path={LEARN} element={<Learn />} />
      <Route path={HOME} element={<Home />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
