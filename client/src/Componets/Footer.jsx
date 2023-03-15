import React from 'react'
import '../styles/footer.css'
import LogoImg from '../assets/bg2.png'

const Footer = () => {
    
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer-wrapper">
                <div className="footer-box">
                    <div className="logo">
                        <div className="logo-img">
                            <img src={LogoImg} alt='logo image'/>
                        </div>
                        <h2>Dino</h2>
                    </div>
                    <p>Thank you for using our service. If you could share our website with your friends,
                         that would be a great help.</p>
                </div>
                <div className="footer-box">
                    <h4 className="footer-title">Company</h4>
                    <ul className="footer-links">
                        <li><a href="#">Our tools</a></li>
                        <li><a href="#">Pricing plan</a></li>
                        <li><a href="#">Create free account</a></li>
                    </ul>
                </div>

                <div className="footer-box">
                    <h4 className="footer-title">Quicks Links</h4>
                    <ul className="footer-links">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact us</a></li>
                        <li><a href="#">Support</a></li>
                    </ul>
                </div>
            </div>
            <p className='copyright'>Copyright  2023  developed by Denis. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
