import React, {useState, useEffect} from 'react';
import "./LoginPage.css";
import { Link } from 'react-router-dom'
import BasicInput from '../../components/basicinput/BasicInput'
import Header from '../../components/header/Header';
import BasicAlert from '../../components/basicalert/BasicAlert';
import { DIGITS_REG_EXP, LOWERCASE_REG_EXP, MIN_LEN_REG_EXP, SPECIAL_CHAR_REG_EXP, UPPERCASE_REG_EXP, validatePassword } from '../../utils/validation';
import { ACCOUNT } from '../../utils/data';


function LoginPage() {
    const [inputValue, setInputValue] = useState({email: "", password: ""});
    const {email, password} = inputValue;
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [isPwdError, setIsPwdError] = useState(false);
    const [isEmailError, setIsEmailError] = useState(false);
    const [pwdErrMsg, setPwdErrMsg] = useState("");
    const [emailErrMsg, setEmailErrMsg] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    const passwordValidation = (e) => {
        e.preventDefault();
        handleChange(e);
        const isValid = validatePassword(password);
        
        if(!isValid) {
            setIsPwdError(true);
            setPwdErrMsg("Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one digit and one special character");
        }else {
            setIsPwdError(false);
            setPwdErrMsg("");
        }
    }

    const emailValidation = (e) => {
        e.preventDefault();
        handleChange(e);
        const isValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(!isValid) {
            setIsEmailError(true);
            setEmailErrMsg("Email is not valid");
        }else {
            setIsEmailError(false);
            setEmailErrMsg("");
        }
    }

    const handleLogin = () => {
        if(email === ACCOUNT.email && password === ACCOUNT.password) {
            setSuccess(true)
            setInputValue({email: "", password: ""});
        }else {
            setSuccess(false);
            setErrorMsg("Login failed :( ");
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isPwdError || isEmailError) {
            return;
        }

        handleLogin()
        
    }
 


  return (
    <div className='loginpage'>
        <Header />
        {success && <BasicAlert type="success" message= "Succesfully Logged In! "/>}
        {errorMsg.length > 0 && <BasicAlert type="error" message= {errorMsg}/>}

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
                <form onSubmit={handleSubmit} className='login__form'>
                    <BasicInput
                        value={email}
                        color={"black"}
                        name="email"
                        type='email'
                        size='large'
                        label='Email or user ID'
                        onChange={emailValidation}
                        errMsg={emailErrMsg}
                        isError={isEmailError}
                    />
                    <BasicInput
                        value={password}
                        type='password'
                        name= "password"
                        size='large'
                        label='Password'
                        onChange={passwordValidation}
                        errMsg={pwdErrMsg}

                        isError={isPwdError}
                    />

                    <div className='login__bottom'>
                        <Link className='login__link link__left' to="/onboarding/forgot-password">Forgot password?</Link>
                        <p>
                            <span>This site is protected by hCaptcha and it's </span>
                            <Link to='/' className='login__link link__right'>Privacy Policy</Link> and <Link to='/' className='login__link link__right'>Terms of Use</Link>
                        </p>
                    </div>
                    <button className={inputValue.email === "" || inputValue.password === "" ? 'login__btn': " login__btn login__btn-active"} >Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage