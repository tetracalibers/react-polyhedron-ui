import styled, { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { IconOnly } from '../../../core/IconOnly'

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-200%) rotate(720deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) rotate(0);
  }
`

export const ActionButtonStyle = css`
  transform: translateX(-200%);
  opacity: 0;
  animation: ${slideIn} 0.75s ease-out forwards;
  width: 2rem;
  height: 2rem;
  position: relative;
  border-radius: 50%;
  background-image: linear-gradient(315deg, #9cdaf8 0%, #98fcbd 74%);
  color: cadetblue;
  box-shadow: inset 14px 0px 5px -10px rgb(255 255 255 / 20%),
    inset 13px 0px 2px -10px rgb(255 255 255 / 20%),
    inset 0px -3px 5px 0px rgb(250 241 220 / 50%),
    inset 0px -20px 10px 1px rgb(255 255 255 / 30%),
    inset -20px 10px 5px -20px rgb(255 255 255 / 30%),
    inset -20px 15px 10px -20px rgb(255 255 255 / 20%),
    inset 0px 20px 30px -5px rgb(255 255 255 / 30%),
    0px 2px 1px -1px rgb(245 225 183 / 80%);
`

export const ActionButton = styled(IconOnly.Button)`
  ${ResetCss.button}
  ${ActionButtonStyle}
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1.5rem;
    height: 1.5rem;
  }
`
