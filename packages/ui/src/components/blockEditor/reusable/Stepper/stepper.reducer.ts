import _ from 'lodash'
import { match } from 'ts-pattern'

export type Store = {
  count: number
  canDecrement: boolean
  canIncrement: boolean
  hasError: boolean
}

export type InputAction = {
  type: 'INPUT'
  args: {
    value: string
    min: number | undefined
    max: number | undefined
  }
}

export type IncrementAction = {
  type: 'INCREMENT'
  args: {
    min: number | undefined
    max: number | undefined
  }
}

export type DecrementAction = {
  type: 'DECREMENT'
  args: {
    min: number | undefined
    max: number | undefined
  }
}

export type Action = IncrementAction | DecrementAction | InputAction

export const validate = (
  now: number,
  min: number | undefined,
  max: number | undefined
) => {
  const NotBelowMin = min !== undefined ? min <= now : true
  const NotExceedsMax = max !== undefined ? max >= now : true
  return {
    NotExceedsMax,
    NotBelowMin,
    hasError: !(NotExceedsMax && NotBelowMin),
  }
}

export const reducer = (state: Store, action: Action) => {
  return match(action.type)
    .with('INCREMENT', () => {
      const { max, min } = (action as IncrementAction).args
      const count = state.count + 1
      // ここからさらに1増やしてもエラーにならないか
      const canIncrement = validate(count + 1, min, max).NotExceedsMax
      // ここからさらに1減らしてもエラーにならないか
      const canDecrement = validate(count - 1, min, max).NotBelowMin
      // 既にエラーかどうか
      const hasError = validate(count, min, max).hasError
      return { count, canIncrement, canDecrement, hasError }
    })
    .with('DECREMENT', () => {
      const { min, max } = (action as DecrementAction).args
      const count = state.count - 1
      const canIncrement = validate(count + 1, min, max).NotExceedsMax
      const canDecrement = validate(count - 1, min, max).NotBelowMin
      const hasError = validate(count, min, max).hasError
      return { count, canIncrement, canDecrement, hasError }
    })
    .with('INPUT', () => {
      const { min, max, value } = (action as InputAction).args
      const count = parseInt(value, 10)
      const valid = !isNaN(count)
      const canIncrement = valid
        ? validate(count + 1, min, max).NotExceedsMax
        : false
      const canDecrement = valid
        ? validate(count - 1, min, max).NotBelowMin
        : false
      const hasError = valid ? validate(count, min, max).hasError : true
      return { count, canIncrement, canDecrement, hasError }
    })
    .exhaustive()
}
