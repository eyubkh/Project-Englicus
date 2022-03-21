import 'regenerator-runtime/runtime.js'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import styled from 'styled-components'

const CanvasConteiner = styled.div`
  width: 100vw;
  height: 100vh;
`

export const World = () => {
  return (
    <CanvasConteiner>
      <Canvas shadows>
        <Suspense fallback={null}>
          <Model />
          <directionalLight castShadow position={[0, 2, 2]} />
        </Suspense>
      </Canvas>
    </CanvasConteiner>
  )
}
