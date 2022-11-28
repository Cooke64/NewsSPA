import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";



export default function LoginPage() {
  const {isAuth, setisAuth} = useContext(AuthContext)
  

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
            {isAuth && (<Navigate to="/" replace={true} />)}
            <MyInput  
                    name='email'
                    type='email'
                    {...register('Email')}
                    placeholder='enter login'
                />
            <MyInput 
                    name='password'
                    type='password'
                    placeholder='enter password'
                    {...register('Password')}
                />
            <MyButtons >Login</MyButtons>
        </form>
    </div>
  )
}