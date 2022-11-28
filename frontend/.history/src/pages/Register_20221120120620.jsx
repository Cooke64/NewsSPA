import React, {useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import {useForm } from "react-hook-form";
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const reEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function SignUp() {

    const [succses, setSuccses] = useState(false)
    const [shouldRedirect, setshouldRedirect]
    const [loginMessage, setloginMessage] = useState('')

    const { register,
            handleSubmit,
            getValues,
            reset, 
            formState: { errors, isValid } } = useForm({
                mode: 'onBlur',

              })

    const onSubmit = data => {
        const email = data.Email
        const username = data.Username
        const password = data.Password
        putPostData (email, username, password)
        
    }
    
    function putPostData (email, username, password) {
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
            console.log(response.data)
            if (response.data.status === 'ok'){
                <Navigate to="/login" replace={true} />
            } else {
                reset()
                setloginMessage(response.data.message)
            }
            
          })
          .catch(function(error) {
            console.log(error.response);
          });
        }



    return (
        <div>
            <div>{succses
                ?<h1>{loginMessage}</h1>
                :<h1>Регистрация</h1>
            
            }</div>
            {shouldRedirect && <Navigate replace to="/home" />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Username</label>
                {errors?.Email && <span style={{color:'red'}}>{errors?.Email?.message || 'Поля обязательно'}</span>}
                <MyInput  
                    name='Username'
                    autoComplete="off"
                    {...register('Username', {
                        required: true,
                    })}
                    placeholder='enter Username'
                />
                <label>Email</label>
                {errors?.Email && <span style={{color:'red'}}>{errors?.Email?.message || 'Поля обязательно'}</span>}
                {/* {isValid && (<Navigate to="/login" replace={true} />)} */}
                <MyInput  
                    name='email'
                    type='email'
                    autoComplete="off"
                    {...register('Email', {
                        required: true,
                        pattern: {
                            value: reEmail,
                            message: 'Неправильный емеёл'
                        }

                        
                    })}
                    placeholder='enter email'
                />
                <label>Password</label>
                {errors?.Password && <span style={{color:'red'}}>{errors?.Password?.message || 'Поля обязательно'}</span>}
                <MyInput 
                    name='password'
                    type='password'
                    autoComplete="off"
                    placeholder='enter password'
                    {...register('Password', {
                        required: true,
                        minLength: {
                            value: 5,
                            message: 'Меньше пяти нельзя'
                        }
                    })}
                />
                <label>Confirm password</label>
                {errors?.confirmPassword && <span style={{color:'red'}}>{errors?.confirmPassword?.message || 'Поле обязательно'}</span>}
                <MyInput 
                    name='confirmPassword'
                    type='password'
                    autoComplete="off"
                    placeholder='enter password'
                    {...register('confirmPassword', {
                        required: true,
                        validate: (value) => {
                            const { Password } = getValues();
                            return Password === value || "Пароли должны совпадать!";
                          },
                    })}
                />     
                <MyButtons disabled={!isValid}>Sign up</MyButtons>
            </form>
        </div>
    )
}
