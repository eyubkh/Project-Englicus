import { Header } from '@components/Molecules/Header'
import { Link } from 'react-router-dom'

export const SectionLearn = () => {
  return (
    <>
    <Header />
    <h1> I am learning!!</h1>
    <Link to='/'> go back</Link>
    <Link to='/ueouoe'> go error</Link>
    </>
  )
}
