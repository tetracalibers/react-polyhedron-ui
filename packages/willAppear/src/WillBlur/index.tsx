import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { TagType } from '../common/props'
import { CharacterProps, _defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WillBlurProps = {
  children: ReactNode
} & CharacterProps

export const defaultProps = {
  ..._defaultProps,
  children: '',
}

export const WillBlur = <As extends TagType>(
  { as, ...props }: WillBlurProps = { ...defaultProps },
  { ...attrs }: ComponentPropsWithoutRef<As>
) => {
  return (
    <StyledElement as={as} {...props} {...attrs}>
      {props.children}
    </StyledElement>
  )
}
