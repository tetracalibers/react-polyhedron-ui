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

export const flipAxisOptions = [
  'flipX',
  'flipY',
  'flipZtoLeftTop',
  'flipZtoRightTop',
] as const
type FlipAxisOptions = typeof flipAxisOptions[number]

const conf = {
  duration: NotRequired<number>(0.3),
  flipAxis: NotRequired<FlipAxisOptions>('flipX'),
  bgColor: NotRequired<CSST.Property.BackgroundColor>('#d6ebff'),
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
