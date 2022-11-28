import React, {useContext, useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'


export default function CommentForm({post_id}) {
  const [text, setText] = useState('')
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })

    function putPostData (post_id, text) {
        console.log('work')
          axios({
            method: 'put',
            url: `http://127.0.0.1:8000/api/posts/${post_id}/comments`,
            data: {post_id, text},
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
          })
          .catch(function(error) {
            console.log(error);
          });
        }
const onSubmitComment = (data) => {
    const text = data.Comment
    putPostData (post_id, text)
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
