import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const insertDrawEffect = css`
  opacity: 1;
  transform: scale(1);
`

const insertImgEffect = css`
  filter: blur(var(--img-blur)) opacity(var(--img-opacity))
    grayScale(var(--img-grayscale));
  /* filterのmobile対応 */
  transform: translateZ(0);
`

const insertTxtEffect = css`
  opacity: 1;
`

export const Root = styled.span<Pick<CharacterProps, 'width' | 'height'>>`
  --width: ${({ width }) => width};
  --height: ${({ height }) => height};

  display: block;
  position: relative; /*テキストの基点となる位置を定義*/
  width: var(--width);
  height: var(--height);
`

// prettier-ignore
export const Mask = styled.span<Pick<CharacterProps, 'imgPadding' | 'imgBlur' | 'imgOpacity' | 'imgGrayScale' | 'lineColor' | 'lineStyle' | 'lineThickness' | 'drawDuration' | 'trigger'>>`
  --img-padding: ${({ imgPadding }) => imgPadding};
  --img-blur: ${({ imgBlur }) => imgBlur}px;
  --img-opacity: ${({ imgOpacity }) => imgOpacity};
  --img-grayscale: ${({ imgGrayScale }) => imgGrayScale}%;
  --border-duration: ${({ drawDuration }) => drawDuration}s;
  --border-color: ${({ lineColor }) => lineColor};
  --border-style: ${({ lineStyle }) => lineStyle};
  --thickness: ${({ lineThickness }) => lineThickness}px;

  position: relative; /*背景色の基点となる位置を定義*/
  display: block;
  line-height: 0;
  overflow: hidden;

  &::before,
  &::after {
    position: absolute;
    top: var(--img-padding);
    right: var(--img-padding);
    bottom: var(--img-padding);
    left: var(--img-padding);
    z-index: 3;
    content: '';
    opacity: 0;
    transition: var(--border-duration) ease-in-out;
  }

  &::before {
    border-top: var(--thickness) var(--border-style) var(--border-color);
    border-bottom: var(--thickness) var(--border-style) var(--border-color);
    transform: scale(0, 1);
    ${({ trigger }) => trigger === 'none' && insertDrawEffect}
  }

  &::after {
    border-right: var(--thickness) var(--border-style) var(--border-color);
    border-left: var(--thickness) var(--border-style) var(--border-color);
    transform: scale(1, 0);
    ${({ trigger }) => trigger === 'none' && insertDrawEffect}
  }

  ${Root}:hover &::before,
  ${Root}:hover &::after {
    ${({ trigger }) => trigger === 'hover' && insertDrawEffect}
  }
  
  & img {
    ${({ trigger }) => trigger === 'none' && insertImgEffect}
  }
  
  ${Root}:hover & img {
    ${({ trigger }) => trigger === 'hover' && insertImgEffect}
  }
`

// prettier-ignore
export const TextWrap = styled.span<Pick<CharacterProps, 'txtDuration' | 'trigger'>>`
  --txt-duration: ${({ txtDuration }) => txtDuration}s;

  && {
    position: absolute;
    opacity: 0; /*透過0*/
    transition: var(--txt-duration) ease-in-out;
    z-index: 3; /*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /*テキストの位置中央指定*/
    width: 100%;
    text-align: center;
    ${({ trigger }) => trigger === 'none' && insertTxtEffect}
  }

  ${Root}:hover && {
    ${({ trigger }) => trigger === 'hover' && insertTxtEffect}
  }
`
