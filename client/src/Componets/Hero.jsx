import React from 'react'
import HeroImg  from '../assets/bet.png'
import '../styles/hero.css'

const Hero = () => {
  return (
    <section>
        <div className="container">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <h2 className='section-title'>Dino is the key to unlocking your beauty
                         <span className="highlights"> potential</span>
                    </h2>
                    <p>Computer vision is an interdisciplinary scientific field that deals with <br/>how computers 
                        can gain high-level understanding.</p>
                    <div className="hero-btn">
                        <button className='register-btn'>Get Started</button>
                        <button className="watch-vid"><span><i class="ri-play-fill">Watch Video</i></span></button>
                    </div>
                </div>
                <div className="hero-img">
                    <div className="hero-img-wrapper">
                        <div className="box-01">
                            <div className="box-02">
                                <div className="box-03">
                                    <div className="box-img">
                                        <img src={HeroImg} alt="Hero Image"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="heart-rate">
                            <h5>Heart Rate</h5>
                            <span>
                            <i class="ri-service-fill"></i>
                            </span>
                            <h5>2567 </h5>
                        </div>

                        <div className="plat-location">
                            <span><i class='ri-map-pin-2-fill'></i></span>
                            <h5>Always Open</h5>
                        </div>

                        <div className="dumble-icon">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
