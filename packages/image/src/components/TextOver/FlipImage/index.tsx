import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from 'react'
import { Image } from '../../core'
import { CharacterProps, defaultProps } from './model/props'
import { Mask, Root, TextWrap } from './styled'

export type TextOverFlipImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TextOverFlipImageComponent = (
  props: TextOverFlipImageProps
) => ReactElement | null

const TextOverFlipImageInner: TextOverFlipImageComponent = (
  { ..._props }: TextOverFlipImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const {
    trigger,
    duration,
    aboveText,
    imgPaddingV,
    imgPaddingU,
    width,
    height,
    bgColor,
    bgOpacity,
    flipAxis,
    ...attrs
  } = props

  return (
    <Root width={width} height={height}>
      <Mask
        duration={duration}
        bgOpacity={bgOpacity}
        bgColor={bgColor}
        imgPaddingV={imgPaddingV}
        imgPaddingU={imgPaddingU}
      >
        <Image {...attrs} ref={ref} />
        <TextWrap>{aboveText}</TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverFlipImage = forwardRef(TextOverFlipImageInner)
