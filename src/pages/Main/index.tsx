import { FC } from 'react'

import BlackFridayBanner from 'widgets/BlackFridayBanner'
import TopBanner from 'widgets/TopBanner'

import s from './s.module.scss'

const Main: FC = () => {
  return (
    <div className={s.mainPage}>
      <div className={s.topBannerWrapper}>
        <TopBanner />
      </div>
      <div className={s.blackFridayBannerWrapper}>
        <BlackFridayBanner />
      </div>
    </div>
  )
}
export default Main
