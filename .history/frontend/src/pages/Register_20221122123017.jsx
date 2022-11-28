import React, {useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import {useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import api from 'api';
import { faCheck} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconLabel from 'components/UI/IconLabel/IconLabel';

const reEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default function SignUp() {


    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [loginMessage, setloginMessage] = useState('Регистрация')

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
        api.registrnUser({email, username, password})
        .then(() => { 
            setShouldRedirect(true)
        })
        .catch((result) => {
            const errors = Object.values(result)
            setloginMessage(errors)
            reset()
        })
        
    }

    return (
        <div>
            <h1>{loginMessage}</h1>
            {shouldRedirect && <Navigate replace to="/login" />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <IconLabel errors={errors.Username} elemtName={'Username'}/>
                <MyInput  
                    name='Username'
                    autoComplete="off"
                    {...register('Username', {
                        required: true,
                        pattern: {
                            value: USER_REGEX,
                            message: 'Неправильный username'
                        }

                    })}
                    placeholder='enter Username'
                />
                <IconLabel errors={errors.Email} elemtName={'Email'}/>
                <MyInput  
                    name='email'
                    type='email'
                    autoComplete="off"
                    {...register('Email', {
                        required: true,
                        pattern: {
                            value: reEmail,
                            message: 'Неправильный email'
                        }

                    })}
                    placeholder='enter email'
                />
                <IconLabel errors={errors.Password} elemtName={'Email'}/>
                <label>Password</label>
                {errors?.Password && <span style={{color:'red'}}>{errors?.Password?.message || 'Поля обязательно'}</span>}
                {!errors.Password  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>}
                <MyInput 
                    name='password'
                    type='password'
                    autoComplete="off"
                    placeholder='enter password'
                    {...register('Password', {
                        required: true,
                        minLength: {
                            value: 8,
                            message: 'Меньше пяти нельзя'
                        }
                    })}
                />
                <label>Confirm password</label>
                {errors?.confirmPassword && <span style={{color:'red'}}>{errors?.confirmPassword?.message || 'Поле обязательно'}</span>}
                {!errors.confirmPassword  && <span style={{color:'green'}}><FontAwesomeIcon icon={faCheck} /></span>}
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
