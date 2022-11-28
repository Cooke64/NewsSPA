import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";



export default function CommentForm({post_id}) {
  const [text, setText] = use
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })

const onSubmitComment = () => {

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
