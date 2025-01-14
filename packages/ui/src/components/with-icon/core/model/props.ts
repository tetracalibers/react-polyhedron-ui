import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { styleDefaultProps, StyleProps } from '../css-props/props'
import { CssStyle } from 'ts-typedef-helper'

export const iconChildOptions = ['first', 'last'] as const
export type IconChildOptions = typeof iconChildOptions[number]

const conf = {
  iconChild: NotRequired<IconChildOptions>('first'),
  spaceV: NotRequired<number>(0.5),
  spaceU: NotRequired<CssStyle.Unit.Length>('em'),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> & StyleProps
export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...styleDefaultProps,
}
