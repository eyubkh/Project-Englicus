import { ColorActionError200, ColorActionSuccess200, ColorBrandSecondary, ColorNeutralGrey200 } from '@tokens'
import { Icon } from '@components/Atoms/Icons/Icon'

export default {
  title: 'UI Web/Atoms/Icons'
}

export const CircleCheck = () => <Icon icon={'CircleCheck'} fill={ColorActionSuccess200} />
export const Lang = () => <Icon icon='Lang' fill={ColorBrandSecondary} />
export const CircleXMark = () => <Icon icon='CircleXMark' fill={ColorActionError200} />
export const XMark = () => <Icon icon='XMark' fill={ColorNeutralGrey200} />
export const ErrorIcon = () => <Icon />
