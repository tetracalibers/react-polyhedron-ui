// @ts-nocheck

import _ from 'lodash'
import { ReactElement, ReactNode } from 'react'
import { useCharCount } from './hooks/useCharCount'
import { CharacterProps, _defaultProps } from './model/props'
import { TextArea } from '../core'
import { TextAreaComponentProp } from '../../../types/polymorphic/fixedAs'
import { VerticalStack } from '../../layout-algorithm/VerticalStack'

export type CharLimitedTextareaProps = TextAreaComponentProp<CharacterProps> & {
  renderCharCountLabel?: (
    currCharCount: number,
    maxChars?: number,
    minChars?: number
  ) => ReactNode
}

export type CharLimitedTextareaComponent = (
  props: CharLimitedTextareaProps
) => ReactElement | null

export const defaultProps = {
  ..._defaultProps,
  renderCharCountLabel: (
    currCharCount: number,
    _maxChars?: number,
    _minChars?: number
  ) => <span>{currCharCount} characters now</span>,
}

export const CharLimitedTextarea: CharLimitedTextareaComponent = ({
  children,
  ..._props
}: CharLimitedTextareaProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { onChange, minChars, maxChars, renderCharCountLabel } = props
  // prettier-ignore
  const [count, updateCount] = useCharCount(minChars, maxChars, onChange)

  return (
    <VerticalStack spaceV={0.5}>
      <TextArea {...props} onChange={updateCount}>
        {children}
      </TextArea>
      <div role='status' aria-live='polite'>
        {renderCharCountLabel(count, maxChars, minChars)}
      </div>
    </VerticalStack>
  )
}
