import { FC } from 'react'

import Close from 'assets/close.svg?react'
import gift from 'assets/gift.webp'

import s from './s.module.scss'

const BlackFridayBanner: FC = () => {
  return (
    <div className={s.banner}>
      <div className={s.imgWrapper}>
        <img alt="gift" className={s.img} src={gift} />
      </div>
      <div className={s.description}>
        <Close className={s.closeBtn} />
        <h2 className={s.title}>Black Friday</h2>
        <h2 className={s.sale}>10%OFF</h2>
        <p className={s.code}>
          Use code <em>10FRIDAY</em> at checkout
        </p>
        <button className={s.buttonShop}>
          <p>Shop now through Monday</p>
        </button>
      </div>
    </div>
  )
}
export default BlackFridayBanner
