import { getDefaultProps, getPropType, Required } from 'react-tsx-props'
import * as CSST from 'csstype'
import { ColorPalette } from 'styled-utility-first'

const conf = {
  borderColor: Required<CSST.Property.BorderColor>(ColorPalette.grayScale.dark),
}
type Conf = typeof conf

export type StyleProps = getPropType<Conf>
export const styleDefaultProps = getDefaultProps<StyleProps>(conf)
