import React, {useState} from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButtons from '../components/UI/buttons/MyButtons'
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const reEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export default function SignUp() {

    const [succses, setSuccses] = useState(false)

    const { register,
            handleSubmit,
            getValues,
            reset, 
            formState: { errors, isValid } } = useForm({
                mode: 'onBlur',

              })

    const auth = getAuth();
    const onSubmit = data => {
        const email = data.Email
        const password = data.Password
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                const user = userCredential.user;
                setSuccses(true)
            })
                
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
        });
        
        reset()
        
    };

    return (
        <div>
            <div>{succses
                ?<h1>Вы успешно зарегестрировались</h1>
                :<h1>Регистрация</h1>
            
            }</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label>
                {errors?.Email && <span style={{color:'red'}}>{errors?.Email?.message || 'Поля обязательно'}</span>}
                {/* {isValid && (<Navigate to="/login" replace={true} />)} */}
                <MyInput  
                    name='email'
                    type='email'
                    {...register('Email', {
                        required: true,
                        pattern: {
                            value: reEmail,
                            message: 'Неправильный емеёл'
                        }

                        
                    })}
                    placeholder='enter login'
                />
                <label>Password</label>
                {errors?.Password && <span style={{color:'red'}}>{errors?.Password?.message || 'Поля обязательно'}</span>}
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
                <label>Confirm password</label>
                {errors?.confirmPassword && <span style={{color:'red'}}>{errors?.confirmPassword?.message || 'Поле обязательно'}</span>}
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
