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

      function login (email, username) {
        console.log('work')
          axios({
            method: 'post',
            url: `http://127.0.0.1:8000/api/sign_up`,
            data: {email: email, username: username, password: password},
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(function(response) {
            setSuccses(true)
            reset()
            setloginMessage(response.data)
            return <Navigate to="/" replace={true} />
          })
          .catch(function(error) {
            console.log(error.response);
          });
        }


  
  return (
    <div>
        <form onSubmit={handleSubmit(login)}>
            
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
