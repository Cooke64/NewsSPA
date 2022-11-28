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

  const login = () => {
    console.log('loged')
     return <Navigate to="/" replace={true} />
  
}

  
  return (
    <div>
        <form onSubmit={handleSubmit(login)}>
            
            <MyInput  
                    name='email'
                    type='email'
                    {...register('Email')}
                    placeholder='enter email'
                    autocomplete="off"
                />
            <MyInput 
                    name='password'
                    type='password'
                    placeholder='enter password'
                    autocomplete="off"
                    {...register('Password')}
                />
            <MyButtons >Login</MyButtons>
        </form>
    </div>
  )
}
