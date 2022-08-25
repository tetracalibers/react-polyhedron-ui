import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Label, Input, Circle } from './styled'
import { WithIcon } from '@polym-ui/typography'

export type RadioProps = Omit<InputComponentPropWithRef<CharacterProps>, 'type'>

export type RadioComponent = (props: RadioProps) => ReactElement | null

export const Radio: RadioComponent = forwardRef(
  ({ children, ..._props }: RadioProps, ref?: PolymorphicRef<'input'>) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <Label>
        <Input {...props} ref={ref} type='radio' />
        <WithIcon>
          <Circle />
          {children}
        </WithIcon>
      </Label>
    )
  }
)
