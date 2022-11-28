import React from 'react'
import cls from './MyButtons.module.css'

export default function MyButtons({children, ...props}) {
  return (
    <button className={cls.myBtn} {...props}>{children}</button>
  )
}
