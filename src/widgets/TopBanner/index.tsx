import { FC } from 'react'

import gift from 'assets/gift.webp'

import s from './s.module.scss'

import Buttons from './Buttons'
import Description from './Description'

const TopBanner: FC = () => {
  return (
    <div className={s.topBanner}>
      <div className={s.imgWrapper}>
        <img alt="gift" className={s.giftImg} src={gift} />
      </div>
      <Description />
      <Buttons />
    </div>
  )
}
export default TopBanner
