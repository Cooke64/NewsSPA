import React, {useContext, useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";



export default function CommentForm({post_id}) {
  const [text, setText] = useState('')
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })

const onSubmitComment = (data) => {
    console.log(data)
    setText(data)
}
  
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmitComment)}>
            <MyInput 
                    name='comment'
    
                    placeholder='Введите комментарий'
                    {...register('Comment')}
                />
            <MyButtons >добавить</MyButtons>
        </form>
    </div>
  )
}
