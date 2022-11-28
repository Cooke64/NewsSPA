import React, { useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { useForm } from "react-hook-form";
import api from 'api';
import { Navigate } from 'react-router-dom';
import useAuth from 'hooks/useAuth';

export default function LoginPage() {
  const {isAuth, setisAuth} = useAuth()
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

            setisAuth(
                {isUser: true}
              )
            localStorage.setItem('token', result.access)
          })
        .catch((errors) => {
          console.log(errors)
          const errorMessage = Object.values(errors)
          setloginMessage(errorMessage)
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
