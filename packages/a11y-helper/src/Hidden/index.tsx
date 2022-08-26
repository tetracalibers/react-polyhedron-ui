import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type HiddenProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type HiddenComponent = <As extends ElementType>(
  props: HiddenProps<As>
) => ReactElement | null

export const Hidden: HiddenComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: HiddenProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as || 'div'}>
        {children}
      </StyledElement>
    )
  }
)
