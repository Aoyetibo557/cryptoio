import React,{useState, useEffect} from 'react';
import "./Header.css";
import HeaderLogo from "../../assets/nobgLogo.png";
import { Link } from "react-router-dom";
import Button from '../button/Button';
import {TbMenu } from "react-icons/tb";
import { MdClose } from "react-icons/md";





function Header() {
  //get the url of the current page
  const [url, setUrl] = useState(window.location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

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

        <div className='hamburger'>
          {menuOpen ? <MdClose className='header__icon' onClick={() => setMenuOpen(false)}/> : <TbMenu className='header__icon' onClick={() => setMenuOpen(true)}/>}
        </div>

        <nav className= { !menuOpen ? "header__nav-home" : "header__nav-home active"}>
          <div className='header__nav-div'>
            <Link to='/' className='header__nav-link'>Home</Link>
            <Link to='/mobile-app' className='header__nav-link'>Mobile app</Link>
            <Link to='/markets' className='header__nav-link'>Markets</Link>
            {/* <Link to='/' className='header__nav-link'>Blogs</Link> */}
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

    </header>
  )
}

export default Header