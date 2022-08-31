import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../../common/props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  ratioX: Required<number>(16),
  ratioY: Required<number>(9),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & CommonProps & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...styleDefaultProps,
}