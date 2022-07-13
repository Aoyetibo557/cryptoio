import React from 'react';
import "./RegisterPage.css";
import { Link } from 'react-router-dom';
import BasicInput from '../../components/BasicInput'
import Header from '../../components/header/Header'

function RegisterPage() {
  return (
    <div className='registerpage'>
        <Header />
        <div className="registerpage__header">
            <div className='register__top'>
                <h3>Welcome to Cryptoio</h3>
                <p>To begin, create your account.</p>
            </div>
            <div className='registerpage__content'>
                <form className='register__form'>
                   <div>
                        <BasicInput
                            color={"black"}
                            name="firstName"
                            type='text'
                            size='small'
                            placeholder='First name'
                        />

                        <BasicInput
                            color={"black"}
                            name="lastName"
                            type='text'
                            size='small'
                            placeholder='Last name'
                        />
                   </div>

                   <div>
                        <BasicInput
                            color={"black"}
                            name="email"
                            type='text'
                            size='large'
                            placeholder='Enter your email'
                        />
                   </div>

                   <div>
                        <BasicInput
                            color={"black"}
                            name="dob"
                            type='date'
                            size='small'
                            placeholder='Enter your Date of birth'
                        />
                   </div>

                   <div className='login__bottom'>
                        <Link className='login__link link__left' to="/onboarding/forgot-password">Forgot password?</Link>
                        <p>
                            <span>This site is protected by hCaptcha and it's </span>
                            <Link to='/' className='login__link link__right'>Privacy Policy</Link> and <Link to='/' className='login__link link__right'>Terms of Use</Link>
                        </p>
                    </div>

                   <button className={'login__btn login__btn-active'}>Continue</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default RegisterPage