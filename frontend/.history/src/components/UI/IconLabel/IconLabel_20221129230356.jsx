import React from 'react'
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconLabel({errors, elemtName, progress, setProgress}) {
  if (errors === undefined) {
    setProgress(progress + 25)
  } else 
  return (
    <>
            <label>{elemtName}</label>
            {errors && <span style={{color:'red'}}>{errors?.message || 'Поля обязательно'}</span>}
            {!errors  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>
            }
    </>

  )
}
