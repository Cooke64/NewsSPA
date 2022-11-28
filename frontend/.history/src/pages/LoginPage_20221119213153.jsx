import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from '../store/userSlice'

export default function LoginPage() {
  const {isAuth, setisAuth} = useContext(AuthContext)
  

  const dispatch = useDispatch()
  
  const { 
        register,
        handleSubmit,
    } = useForm({
        mode: 'onBlur',

      })


  const login = data => {
    
    const auth = getAuth();
    const email = data.Email
    const password = data.Password

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

  }

  
  return (
    <div>
        <form onSubmit={handleSubmit(login)}>
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
