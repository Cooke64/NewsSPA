import React from 'react'
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLabel({errors, elemtName}) {
  return (
    <>
            <label>{elemtName}</label>
            {errors?.elemtName && <span style={{color:'red'}}>{errors?.elemtName?.message || 'Поля обязательно'}</span>}
            {!errors.elemtName  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>}
    </>

  )
}
