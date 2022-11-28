import React from 'react'
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLabel({errors, elemtName}) {
    console.log(errors?.message)
  return (
    <>
            <label>{elemtName}</label>
            {errors && <span style={{color:'red'}}>{elemtName?.message || 'Поля обязательно'}</span>}
            {!errors  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>}
    </>

  )
}
