import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WillFlipProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillFlipComponent = <As extends ElementType>(
  props: WillFlipProps<As>
) => ReactElement | null

export const WillFlip: WillFlipComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillFlipProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as as unknown as undefined}>
        {children}
      </StyledElement>
    )
  }
)
