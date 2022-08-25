import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const StyledElement = styled.div<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --bar-bgcolor: ${ColorPalette.grayScale.dark};
  --bar-color: ${ColorPalette.grayScale.light};
  --bar-height: 1rem;
  --height: ${({ height }) => height};
  --item-width: ${({ itemWidth }) => itemWidth};

  display: flex;
  height: var(--height);
  overflow-x: auto;
  overflow-y: hidden;

  /* for Firefox */
  scrollbar-color: var(--bar-color) var(--bar-bgcolor);

  &::-webkit-scrollbar {
    height: var(--bar-height);
  }

  &::-webkit-scrollbar-track {
    background-color: var(--bar-bgcolor);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--bar-bgcolor);

    /* 線形グラデーションによって背景の中につまみを描画 */
    background-image: linear-gradient(
      var(--bar-bgcolor) 0,
      var(--bar-bgcolor) calc(var(--bar-height) * 0.25),
      var(--bar-color) calc(var(--bar-height) * 0.25),
      var(--bar-color) calc(var(--bar-height) * 0.75),
      var(--bar-bgcolor) calc(var(--bar-height) * 0.75)
    );
  }

  & > * {
    /* デフォルトではflex-shrink: 1;が適用されているため、widthだけではうまく機能しない */
    flex: 0 0 var(--item-width);
  }

  /* 画像のリセット */
  & > img {
    height: 100%;
    flex-basis: auto;
    width: auto;
  }

  /* 連続する要素のみ */
  & > * + * {
    margin-left: var(--space);
  }

  /* スクロールバーが必要な場合のみ */
  //padding-bottom: var(--space);

  /* スクロールバー削除 */
  ${({ hideScrollBar }) => {
    return Truthy(hideScrollBar).when(css`
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }
    `)
  }}
`