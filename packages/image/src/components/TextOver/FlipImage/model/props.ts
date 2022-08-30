import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { CssStyle } from 'ts-typedef-helper'
import {
  defaultTextOverImageProps,
  TextOverImageProps,
} from '../../common/props'

export const motionTypeOptions = [
  'fade',
  'slideUp',
  'slideDown',
  'slideLtoR',
  'slideRtoL',
  'spreadHorizontal',
  'spreadVertical',
] as const
type MotionTypeOptions = typeof motionTypeOptions[number]

const conf = {
  motionType: NotRequired<MotionTypeOptions>('fade'),
  duration: NotRequired<number>(0.3),
}
type Conf = typeof conf

export type CharacterProps = getPropType<Conf> &
  CommonProps &
  TextOverImageProps

export const defaultProps = {
  ...getDefaultProps<CharacterProps>(conf),
  ...commonDefaultProps,
  ...defaultTextOverImageProps,
}
