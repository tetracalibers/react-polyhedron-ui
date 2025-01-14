import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

const injectStartState = (motionType: CharacterProps['motionType']) => {
  return match(motionType)
    .with('slideUp', () => {
      return css`
        transform: translateY(100%);
      `
    })
    .with('slideDown', () => {
      return css`
        transform: translateY(-100%);
      `
    })
    .with('slideLtoR', () => {
      return css`
        transform: translateX(-100%);
      `
    })
    .with('slideRtoL', () => {
      return css`
        transform: translateX(100%);
      `
    })
    .with('spreadHorizontal', () => {
      return css`
        transition: transform var(--bg-duration) cubic-bezier(0.8, 0, 0.2, 1) 0s;
        transform: scale(0, 1);
        transform-origin: center;
      `
    })
    .with('spreadVertical', () => {
      return css`
        transition: transform var(--bg-duration) cubic-bezier(0.8, 0, 0.2, 1) 0s;
        transform: scale(1, 0);
        transform-origin: center;
      `
    })
    .otherwise(() => '')
}

const injectEndState = (motionType: CharacterProps['motionType']) => {
  return match(motionType)
    .with('slideUp', 'slideDown', () => {
      return css`
        transform: translateY(0);
      `
    })
    .with('slideLtoR', 'slideRtoL', () => {
      return css`
        transform: translateX(0);
      `
    })
    .with('spreadHorizontal', 'spreadVertical', () => {
      return css`
        transform: scale(1, 1);
      `
    })
    .otherwise(() => '')
}

const insertBgEffect = css<Pick<CharacterProps, 'motionType'>>`
  opacity: var(--bg-opacity); /*透過なしに変化*/
  ${({ motionType }) => injectEndState(motionType)}
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
export const Mask = styled.span<Pick<CharacterProps, 'bgDuration' | 'bgColor' | 'bgOpacity' | 'motionType' | 'trigger' | 'imgPaddingU' | 'imgPaddingV'>>`
  --bg-duration: ${({ bgDuration }) => bgDuration}s;
  --bg-color: ${({ bgColor }) => bgColor};
  --bg-opacity: ${({ bgOpacity }) => bgOpacity};
  --img-padding: ${({ imgPaddingV, imgPaddingU }) => imgPaddingV! + imgPaddingU!};

  position: relative; /*背景色の基点となる位置を定義*/
  display: block;
  line-height: 0;
  /* はみ出す画像を隠す */
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0; /*透過0*/
    background-color: var(--bg-color);
    width: calc(100% - var(--img-padding) * 2);
    height: calc(100% - var(--img-padding) * 2);
    margin: var(--img-padding);
    box-sizing: content-box;
    transition: var(--bg-duration) ease-in-out;
    ${({ motionType }) => injectStartState(motionType)}
    ${({ trigger }) => trigger === 'none' && insertBgEffect}
  }

  ${Root}:hover &::before {
    ${({ trigger }) => trigger !== 'none' && insertBgEffect}
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
    ${({ trigger }) => trigger !== 'none' && insertTxtEffect}
  }
`
