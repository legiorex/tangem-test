import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import BlackFridayBanner from 'widgets/BlackFridayBanner'
import TopBanner from 'widgets/TopBanner'

import { cx } from 'utils/cx'

import s from './s.module.scss'

const options = {
  rootMargin: '5px',
  threshold: 0.5,
}

const Main: FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isShowBanner, setShowBanner] = useState(false)

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      setShowBanner(!entry.isIntersecting)
    })
  }, [])

  const observer = useMemo(() => new IntersectionObserver(callback, options), [callback])

  useEffect(() => {
    const isHideBannerLocalData = JSON.parse(localStorage.getItem('hideBanner'))
    if (ref.current && !isHideBannerLocalData) {
      observer.observe(ref.current)
    }
  }, [observer])

  const hideBanner = () => {
    setShowBanner(false)
    localStorage.setItem('hideBanner', 'true')
    observer.unobserve(ref.current)
  }

  return (
    <div className={s.mainPage}>
      <div className={s.topBannerWrapper} ref={ref}>
        <TopBanner />
      </div>
      <div className={cx(s.blackFridayBannerWrapper, isShowBanner && s.showBanner)}>
        <BlackFridayBanner onClose={hideBanner} />
      </div>
    </div>
  )
}
export default Main
