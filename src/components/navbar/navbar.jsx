/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import './navbar.css';
import {RiMenu3Line,RiCloseLine} from'react-icons/ri'
import logo from '../../images/logo.png'
// BEM-> Block Element Modifier

const Menu=()=>(
  <>
  <p><a href="#home">Home</a></p>
  <p><a href="#About">What Is GPT-3?</a></p>
  <p><a href="#Library">Library</a></p>
  <p><a href="#CaseStudies">Case Studies</a></p>
  <p><a href="#OpenAI">Open AI</a></p>
  </>
)
const navbar = () => {
  const [toggleMenu,setToggleMenu]= useState(false) 
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" width={100} height={40}/>
        </div>
        <div className='gpt3__navbar-links_containers'>
          <Menu />
        </div>
        <div className='gpt3__navbar-links-sign'>
            <button type='button'>Sign In</button>
            <button type='button'>Sign Up</button>
          </div>
        <div className='gpt3__navbar-menu'>
          {toggleMenu
            ?<RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} /> 
            :<RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)} />}

          {toggleMenu && (
            <div className='gpt3__navbar-menu_containers scale-up center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu/>
                <div className='gpt3__navbar-menu_containers-links-sign'>
                  <button type='button'>Sign In</button>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default navbar