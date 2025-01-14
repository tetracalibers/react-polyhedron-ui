import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { ScaleGradientStyleProps } from '../model/style'

const baseStyle = css`
  ${ResetCss.button}

  ${({ theme }) => css`
    /* gradient */
    --bg-color-1: ${theme.bgColor01};
    --bg-color-2: ${theme.bgColor02};
    --slope: ${theme.slope}deg; // 90
    /* box */
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
    /* onHover */
    --duration: ${theme.duration}s;
    --scale-factor: ${theme.scaleFactor};
    /* shadow */
    --shadow-offsetX: ${theme.shadowOffsetXV + theme.shadowOffsetXU};
    --shadow-offsetY: ${theme.shadowOffsetYV + theme.shadowOffsetYU};
    --shadow-blur: ${theme.shadowBlurV + theme.shadowBlurU};
    --shadow-color: ${theme.shadowColor};
  `}
`

const effectAs = (type: ScaleGradientStyleProps['hoverEffect']) => {
  return match(type)
    .with('shrink', () => {
      return css`
        box-shadow: var(--shadow-offsetX) var(--shadow-offsetY)
          var(--shadow-blur) var(--shadow-color);

        &:hover {
          transform: scale(calc(1 - var(--scale-factor)));
        }
      `
    })
    .with('expand', () => {
      return css`
        &:hover {
          transform: scale(calc(1 + var(--scale-factor)));
          box-shadow: var(--shadow-offsetX) var(--shadow-offsetY)
            var(--shadow-blur) var(--shadow-color);
        }
      `
    })
    .otherwise(() => '')
}

export const injectScaleGradientStyle = css`
  ${baseStyle}

  display: inline-block;
  text-decoration: none;
  outline: none;
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--border-radius);
  transition: all var(--duration) ease-out;

  background: linear-gradient(
    var(--slope),
    var(--bg-color-1) 0%,
    var(--bg-color-2) 80%,
    var(--bg-color-2) 100%
  );

  ${({ theme }) => effectAs(theme.hoverEffect)}
`
