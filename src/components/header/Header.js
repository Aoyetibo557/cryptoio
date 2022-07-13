import React,{useState, useEffect} from 'react';
import "./Header.css";
import HeaderLogo from "../../assets/nobgLogo.png";
import { Link } from "react-router-dom";


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
        {urlPath === "home" ? (
          <nav className='header__nav-home'>
            <div>
              <Link to='/' className='header__nav-link'>Home</Link>
              <Link to='/' className='header__nav-link'>Mobile app</Link>
              <Link to='/' className='header__nav-link'>Markets</Link>
              <Link to='/' className='header__nav-link'>Blogs</Link>
              <Link to='/' className='header__nav-link'>Tradeview</Link>
            </div>

            <div>
              <Link to='/onboarding/login' className='header__nav-link'>Login</Link>
              <button className='header__btn'>Get started</button>
            </div>
          </nav>
        ):(
          <nav className='header__nav'>
              {urlPath === "register" ? (
                <Link to='/onboarding/login' className='header__nav-link'>Login</Link>
              ):(
                <Link to='/onboarding/register' className='header__nav-link'>Register</Link>
              )}

          </nav>
        )}
    </header>
  )
}

export default Header