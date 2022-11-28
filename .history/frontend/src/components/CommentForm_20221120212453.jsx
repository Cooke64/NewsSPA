import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { useForm } from "react-hook-form";
import api from 'api';


export default function CommentForm({post, createPost}) {
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })


const onSubmitComment = (data) => {
    const text = data.Comment
    api.createComment (post, text)
    
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
