import React from 'react'
import cls from './MyInput.module.css'




const MyInput = React.forwardRef((props, ref, setProgress) => {
  if
  return (
    <input className={['form-control', cls.myInput].join(' ')} {...props} ref={ref} />
  )
})

export default MyInput