import React from 'react'

export default function IconLabel({errors, elemtName}) {
  return (
    <>
            <label>elemtName</label>
            {errors?.elemtName && <span style={{color:'red'}}>{errors?.Username?.message || 'Поля обязательно'}</span>}
            {!errors.elemtName  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>}
    </>

  )
}
