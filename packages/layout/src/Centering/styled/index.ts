import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledElement = styled.div`
  /* paddingを幅の計算から除外 */
  box-sizing: content-box;
`
