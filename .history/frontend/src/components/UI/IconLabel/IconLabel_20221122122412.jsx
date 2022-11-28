import React from 'react'

export default function IconLabel() {
  return (
    <
    <label>Username</label>
    {errors?.Username && <span style={{color:'red'}}>{errors?.Username?.message || 'Поля обязательно'}</span>}
    {!errors.Username  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>}
  )
}
