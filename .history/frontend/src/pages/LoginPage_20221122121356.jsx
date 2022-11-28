import React, {useContext, useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { useForm } from "react-hook-form";
import api from 'api';
import { Navigate } from 'react-router-dom';


export default function LoginPage() {
  const {isAuth, setisAuth} = useContext(AuthContext)
  const [loginMessage, setloginMessage] = useState('')
  
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })
  
    const onSubmit = data => {
        const email = data.Email
        const password = data.Password
        api.loginUser({email, password})
        .then((result) => {
          console.log(result)
          setisAuth({isUser: true})})
        .catch((result) => {
          const errors = Object.values(result)
          setloginMessage(errors)
      })
    }

  
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            {isAuth.isUser && <Navigate replace to="/" />}
            <h1 style={{color:'red'}}>{loginMessage}</h1>
            <MyInput  
                    name='email'
                    type='email'
                    {...register('Email')}
                    placeholder='enter email'
                    autoComplete="off"
                />
            <MyInput 
                    name='password'
                    type='password'
                    placeholder='enter password'
                    autoComplete="off"
                    {...register('Password')}
                />
            <MyButtons >Login</MyButtons>
        </form>
    </div>
  )
}
