import { FC, useState } from 'react'

import Arrow from 'assets/arrow.svg?react'
import Close from 'assets/close.svg?react'

import MenuModal from 'components/MenuModal'

import s from './s.module.scss'

const Buttons: FC = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div className={s.buttons}>
        <button className={s.buttonShop}>
          <p>Shop now</p>
        </button>
        <Close />
      </div>
      <Arrow className={s.menu} onClick={() => setOpen(true)} />
      <MenuModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  )
}
export default Buttons
