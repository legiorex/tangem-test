import { FC } from 'react'

import TopBanner from 'widgets/TopBanner'

import s from './s.module.scss'

const Main: FC = () => {
  return (
    <div className={s.topBannerWrapper}>
      <TopBanner />
    </div>
  )
}
export default Main
