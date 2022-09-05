import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const ToggleHidden = styled.div`
  &[aria-hidden='true'] {
    display: none;
  }
`
