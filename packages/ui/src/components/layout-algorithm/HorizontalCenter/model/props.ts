import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'

const conf = {
  // テキストも中央揃えにするか
  textCenter: NotRequired<boolean>(false),
  // 子要素をそのコンテンツ幅に基づいて中央揃えにさせるか
  byContentWidth: NotRequired<boolean>(false),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
