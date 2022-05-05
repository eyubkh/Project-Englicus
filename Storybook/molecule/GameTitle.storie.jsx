import { GameTitle as Component } from '@component/molecule/GameTitle'

export default {
  title: 'UI Web/molecule',
  component: Component
}

export const GameTitle = (args) => <Component {...args} />

GameTitle.args = {
  children: 'Storie title'
}
