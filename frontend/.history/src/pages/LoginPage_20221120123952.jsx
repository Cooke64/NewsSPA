import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import axios from 'axios'

export default function LoginPage() {
  const {isAuth, setisAuth} = useContext(AuthContext)
  
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })
  
    const onSubmit = data => {
        const email = data.Email

        const password = data.Password
        login (email, password)
        
    }

  const login = (email, password) => {
    axios({
      method: 'post',
      url: `http://127.0.0.1:8000/api/login`,
      data: {
        email: email,
        password: password
      },
      headers: {
        'Content-Type': 'application/json',
        'withCredentials': 'include' 
      },
    })
    .then(function(response) {
        console
        setisAuth(true)
    })
    .catch(function(error) {
      console.log(error.response);
    });
  
}

  
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            
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
