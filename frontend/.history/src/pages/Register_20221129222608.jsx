import React, {useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import {useForm } from "react-hook-form";
import { Navigate } from 'react-router-dom';
import api from 'api';
import IconLabel from 'components/UI/IconLabel/IconLabel';

const reEmail =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const USER_REGEX = /^[A-z0-9][A-z0-9-_]{3,23}$/;

export default function SignUp() {


    const [shouldRedirect, setShouldRedirect] = useState(false)
    const [loginMessage, setloginMessage] = useState('Регистрация')
    const [progress, setProgress] = useState(20)

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

    React.useEffect(() => {register()},
        [errors, loginMessage]
        )

    return (
        <div>
            <h1>{loginMessage}</h1>
            <div class="progress">
                <div class="progress-bar bg-info" role="progressbar" 
                style={{"width": `${progress}%`}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
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
                            message: 'Имя должно быть из букв и цифр'
                        }

                    })}
                    placeholder='enter Username'
                />
                <IconLabel errors={errors.Email} elemtName={'Email'} />
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
                <IconLabel errors={errors.Password} elemtName={'Password'}/>
                <MyInput 
                    name='password'
                    type='password'
                    placeholder='enter password'
                    {...register('Password', {
                        required: true,
                        minLength: {
                            value: 8,
                            message: 'Меньше пяти нельзя'
                        }
                    })}
                />
                <IconLabel errors={errors.confirmPassword} elemtName={'Confirm password'}/>
                <MyInput 
                    name='confirmPassword'
                    type='password'
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
