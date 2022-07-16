import React,{useState, useEffect} from 'react';
import "./Header.css";
import HeaderLogo from "../../assets/nobgLogo.png";
import { Link } from "react-router-dom";
import Button from '../button/Button';


function Header() {
  //get the url of the current page
  const [url, setUrl] = useState(window.location.pathname);
  const urlPath = url.split("/")[2] || "home";

  useEffect(() => {
    window.addEventListener("popstate", () => {
      setUrl(window.location.pathname);
    });
    // alert(urlPath);
  }, [url]);
  return (
    <header className='header'>
        <Link to='/'>
            <img src={HeaderLogo} alt="logo" className='header__logo'/>
        </Link>
        {/* {urlPath === "home" ? ( */}
          <nav className='header__nav-home'>
            <div className='header__nav-div'>
              <Link to='/' className='header__nav-link'>Home</Link>
              <Link to='/mobile-app' className='header__nav-link'>Mobile app</Link>
              <Link to='/markets' className='header__nav-link'>Markets</Link>
              <Link to='/' className='header__nav-link'>Blogs</Link>
            </div>

            <div className='header__nav-div-right'>
              <Link to='/onboarding/login' className='header__nav-link'>Login</Link>
              <Button 
                url='/onboarding/login'
                label='Get Started'
                color='primary'
              />
            </div>
          </nav>
        {/* ):( */}
          {/* <nav className='header__nav'>
              {urlPath === "register" ? (
                <Link to='/onboarding/login' className='header__nav-link'>Login</Link>
              ):(
                <Link to='/onboarding/register' className='header__nav-link'>Register</Link>
              )}

          </nav> */}
        {/* )} */}
    </header>
  )
}

export default Header