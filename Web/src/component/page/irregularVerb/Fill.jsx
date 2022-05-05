import { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBasicVerbs } from '@redux/data/dataSlice'
import { FillPanel } from '../../organism/FillPanel'
import { FooterCheck } from '../../organism/FooterCheck'
import { ProgressBar } from '../../molecule/ProgressBar'
import { Loading } from '../Loading'
import { FillDone } from '../../organism/FillDone'

const Component = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Fill = () => {
  const dispatch = useDispatch()
  const { isLoading, api } = useSelector(state => state.data)
  useEffect(() => {
    dispatch(fetchBasicVerbs())
  }, [])

  return (
    <>
      {
        isLoading
          ? <Loading />
          : api.length === 0
            ? <FillDone />
            : <Component>
                <ProgressBar />
                <FillPanel />
                <FooterCheck />
              </Component>
      }
    </>
  )
}

export default Fill
