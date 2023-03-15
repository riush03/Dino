import React from 'react'
import '../styles/start.css'
import SomeImg from '../assets/watercolor.jpg'

const Start = () => {
  return (
    <section id='start'>
        <div className='container'>
            <div className="start-wrapper">
                <div className="start-img">
                    <img src={SomeImg} alt="bg image"/>
                </div>

                <div className="start-content">
                    <h2 className="section-title">
                        Ready to make a <span className="highlights">change?</span>
                    </h2>
                    <p>
                        Remix Icon is a set of open-source neutral-style system symbols elaborately crafted for
                       designers and developers.All of the icons are free for both personal and commercial use.
                    </p>
                    <button className="register-btn">Get Started</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Start
