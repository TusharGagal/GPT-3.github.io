import React from 'react'
import logo from '../../images/logo.png'
import './footer.css';
const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Acess</p>
      </div>
      <div className='gpt3__footer-content'>
        <div className='gpt3__footer-content-logo'>
          <img src={logo} alt="logo" />
          <p>OpenAI © 2015 – 2023 | All Rights Reserved</p>
        </div>
          <div className='gpt3__footer-content-links'>
            <h4>Links</h4>
            <p>Overons</p>
            <p>Social Media</p>
            <p>Counters</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-content-links'>
            <h4>Company</h4>
            <p>Terms & conditions</p>
            <p>Privacy Policy</p>
            <p>Contact</p>
          </div>
          <div className='gpt3__footer-content-links'>
            <h4>Get In Touch</h4>  
            <p>Open AI</p>
            <p>0129-9038732</p>
            <p>info@openAi.net</p>
          </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default footer