import React ,{useEffect, useRef,useState} from 'react'
import {Link,useLocation,useNavigate} from 'react-router-dom';
import newRequest from "../utils/newRequest";
import LogoImg from '../assets/bg2.png'
import '../styles/header.css'

const navLinks = [
    {
        path:'#',
        display:'Home'
    },
    {
        path:'#start',
        display:'Start'
    },
    {
        path:'#nodel',
        display:'About'
    },
    {
        path:'#pricing',
        display:'Pricing'
    },
    {
        path:'#testmonial',
        display:'Testmonials'
    },
]

const Header = () => {
    const headerRef = useRef(null);

    const headerFunc = () => {
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add('sticky-header')
        }else{
            headerRef.current.classList.remove('sticky-header')
        }
    }

    useEffect(()=> {
        window.addEventListener('scroll',headerFunc);

        return () => window.removeEventListener('scroll',headerFunc);
    },[])

    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href');
        const location = document.querySelector(targetAttr).offsetTop();

        window.scrollTo({
            left:0,
            top:location - 80,
        });
    };

    const handleCreateProject = () => {
        window.location.href = './app/index.html';
      };


  return (
    <header className='header' ref={headerRef}>
        <div className='container'>
            <div className="nav-wrapper">
                <div className="logo">
                    <div className="logo-img"><img src={LogoImg} alt=''/></div>
                    <h2>Dino</h2>
                </div>
                <div className="navigation">
                    <ul className="menu">
                        {
                            navLinks.map(item=>(
                                <li className='nav-link'><a onClick={handleClick} href={item.path}>
                                    {item.display}</a></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="nav-right">
                  
                    <button className='register-btn' onClick={handleCreateProject}>Try for free</button>

                    <span className="mobile-menu">
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
            
        </div>
    </header>
  )
}

export default Header