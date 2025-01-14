import { cloneElement, ReactElement, useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { useThrottle } from '@polym/hooks'
import { AsFromProps, defaultAsFromProps } from './model/props'
import { Fixed } from './styled/asFrom'

export type ScrollTopProps = {
  children: ReactElement<any, 'button'>
}

export const ScrollTop = ({ children }: ScrollTopProps) => {
  const goTop = () => {
    window.scroll({ top: 0, behavior: 'smooth' })
    children.props.onClick && children.props.onClick()
  }

  const TriggerButton = cloneElement(children, {
    onClick: goTop,
  })

  return <>{TriggerButton}</>
}

/* 指定の高さを超えたら出現 ------------------------------- */

export type ScrollTopAsFromProps = ScrollTopProps & AsFromProps

const getAsFrom = (CoreComponent: typeof ScrollTop) => {
  return ({
    children,
    startHeight = defaultAsFromProps.startHeight,
    appearFrom = defaultAsFromProps.appearFrom,
  }: ScrollTopAsFromProps) => {
    const [visible, setVisible] = useState<boolean>()

    const visibleController = useThrottle(() => {
      const scrollHeight = Math.max(
        window.pageYOffset,
        document.documentElement.scrollTop,
        document.body.scrollTop
      )
      if (scrollHeight > startHeight!) {
        return setVisible(true)
      }
      visible && setVisible(false)
    }, 100) // 100msに一度実行

    useEffect(() => {
      // マウント時にも実行
      visibleController()
      window.addEventListener('scroll', visibleController)

      // アンマウント時にイベントリスナーを解除
      return () => window.removeEventListener('scroll', visibleController)
    }, [visibleController])

    return (
      <ThemeProvider theme={{ appearFrom }}>
        <CoreComponent>
          <Fixed data-visible={visible}>{children}</Fixed>
        </CoreComponent>
      </ThemeProvider>
    )
  }
}

ScrollTop.AsFrom = getAsFrom(ScrollTop)

/* 範囲内でのみ出現 ----------------------------------- */

const InRange = () => {}
