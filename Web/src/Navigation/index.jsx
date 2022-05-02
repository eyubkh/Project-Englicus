import { Routes, Route } from 'react-router-dom'
import { HOME, LEARN, IRREGULARVERB } from './CONSTANS'
// Components
import Home from '@component/page/Home'
import Learn from '@component/page/Learn'
import Fill from '@component/page/irregularVerb/Fill'
import NotFound from '@component/page/NotFound'

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={IRREGULARVERB} element={<Fill />} />
      <Route path={LEARN} element={<Learn />} />
      <Route path={HOME} element={<Home />} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
