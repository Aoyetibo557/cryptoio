import React, {useState, useEffect} from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom'
import BasicInput from '../../components/BasicInput'
import Header from '../../components/header/Header';


function LoginPage() {
    const [inputValue, setInputValue] = useState({email: "", password: ""});
    const {email, password} = inputValue;
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

  return (
    <div className='loginpage'>
        <Header />
        <div className="loginpage__header">
            <div className='login__top'>
                <h3>Log in</h3>
                <p>
                    Don't have an account? <span>
                        <Link className='login__link' to='/onboarding/register'>Register now for free.</Link>
                    </span>
                </p>
            </div>
            <div className='loginpage__content'>
                <form className='login__form'>
                    <BasicInput
                        value={email}
                        color={"black"}
                        name="email"
                        type='text'
                        size='large'
                        placeholder='Email or user ID'
                        onChange={handleChange}
                        isError={isError}
                    />
                    <BasicInput
                        value={password}
                        type='password'
                        name= "password"
                        size='large'
                        placeholder='Password'
                        onChange={handleChange}
                        isError={isError}
                    />

                    <div className='login__bottom'>
                        <Link className='login__link link__left' to="/onboarding/forgot-password">Forgot password?</Link>
                        <p>
                            <span>This site is protected by hCaptcha and it's </span>
                            <Link to='/' className='login__link link__right'>Privacy Policy</Link> and <Link to='/' className='login__link link__right'>Terms of Use</Link>
                        </p>
                    </div>
                    <button className={inputValue.email === "" || inputValue.password === "" ? 'login__btn': " login__btn login__btn-active"} onClick={() => alert(email, password)}>Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage