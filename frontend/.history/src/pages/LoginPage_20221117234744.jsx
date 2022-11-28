import React, {useContext} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { AuthContext } from '../utils/context'
import { Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form";


export default function LoginPage() {
  const {isAuth, setisAuth} = useContext(AuthContext)
  const { register,
    handleSubmit,
    getValues,
    reset, 
    formState: { errors, isValid } } = useForm({
        mode: 'onBlur',

      })


  const login = event => {
    event.preventDefault();
    setisAuth(true);
    localStorage.setItem('auth', true)
  }

  
  return (
    <div>
        <form onSubmit={login}>
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
                    {...register('Password', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'Меньше пяти нельзя'
                        }
                    })}
                />
            <MyButtons >Login</MyButtons>
        </form>
    </div>
  )
}
