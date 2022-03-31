import 'regenerator-runtime/runtime.js'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'

export const World = () => {
  return (
      <Canvas shadows>
        <Suspense fallback={null}>
          <Model position={[0, 0, 0]} scale={1} />
          <directionalLight castShadow position={[0, 2, 2]} />
        </Suspense>
      </Canvas>
  )
}
