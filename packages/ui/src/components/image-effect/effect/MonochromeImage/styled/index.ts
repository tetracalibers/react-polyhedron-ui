import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const insertEffect = css<CharacterProps>`
  filter: grayscale(0);
`

export const Mask = styled.span<CharacterProps>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};
  --duration: ${({ duration }) => duration}s;
  --grayscale: ${({ grayScale }) => grayScale}%;

  /* はみ出す画像を隠す */
  && {
    display: block;
    line-height: 0;
    overflow: hidden;
    width: var(--width);
    height: var(--height);
  }

  && img {
    filter: grayscale(var(--grayscale));
    transition: var(--duration) ease-in-out;
    /* filterのmobile対応 */
    transform: translateZ(0);
  }

  && img:hover {
    ${({ trigger }) => trigger === 'hover' && insertEffect}
  }
`
