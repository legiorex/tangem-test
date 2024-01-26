import { FC } from 'react'

import Dot from 'assets/dot.svg?react'

import { cx } from 'utils/cx'

import s from './s.module.scss'

const Description: FC = () => {
  return (
    <div className={s.description}>
      <p>
        <b>Black Friday</b> <span className={s.date}>, 24-27 Nov</span>
      </p>
      <Dot className={s.hideMobile} />
      <em>10%OFF</em>
      <Dot className={s.hideMobile} />
      <p className={cx(s.code, s.hideMobile)}>
        Use code <em>10FRIDAY</em> <span>at checkout</span>
      </p>
    </div>
  )
}
export default Description
