import {
  getDefaultProps,
  getPropType,
  Required,
  NotRequired,
} from 'react-tsx-props'
import { commonDefaultProps, CommonProps } from '../../../model/props'
import { CssStyle } from 'ts-typedef-helper'
import * as CSST from 'csstype'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import {
  defaultTextOverImageProps,
  TextOverImageProps,
} from '../../common/props'

export const triggerOptions = ['hover', 'none'] as const
export type TriggerOptions = typeof triggerOptions[number]

const conf = {
  bgDuration: NotRequired<number>(0.3),
  txtDuration: NotRequired<number>(0.5),
  coverOpacity: NotRequired<number>(0.6),
  gradientFrom: NotRequired<CSST.Property.Color>('#7ee8fa'),
  gradientTo: NotRequired<CSST.Property.Color>('#eec0c6'),
  gradientSlope: NotRequired<number>(45),
  trigger: NotRequired<TriggerOptions>('hover'),
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
