import { FC } from 'react'

import { createPortal } from 'react-dom'

import s from './s.module.scss'

type Props = {
  isOpen: boolean
  onClose: () => void
}
const MenuModal: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null
  return createPortal(
    <div className={s.modal}>
      <p className={s.code}>
        Use code <em>10FRIDAY</em> <br />
        at checkout
      </p>

      <button className={s.button}>Shop now</button>

      <button className={s.button} onClick={onClose}>
        Close Modal
      </button>
    </div>,
    document.body,
  )
}
export default MenuModal
