import React from 'react'
import '../styles/testmonial.css'
import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-cards'
import Girl_1 from '../assets/test_1.jpg'
import Girl_2 from '../assets/test_2.jpg'
import Girl_3 from '../assets/test_3.jpg'

import {EffectCards} from 'swiper'

export default function Testmonial(){
    return(
        <>
        <section id='testmonial'>
            <div className="container sliders">
                <h2 className="section-title">Testmonials</h2>
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="mySwipper">
                    <SwiperSlide>
                        <div className="slide-item">
                            <div className="slide-img-01">
                                <img src={Girl_1} alt='Steve jobs'/>
                            </div>
                            <h4>Eva Motty</h4>
                            <p>Remix Icon is a set of open-source neutral-style 
                                system symbols elaborately crafted for designers and developers.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-item">
                            <div className="slide-img-02">
                                <img src={Girl_2} alt='Steve jobs'/>
                            </div>
                            <h4>Kendall Jenner</h4>
                            <p>Remix Icon is a set of open-source neutral-style 
                                system symbols elaborately crafted for designers and developers.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="slide-item">
                            <div className="slide-img-03">
                                <img src={Girl_3} alt='Steve jobs'/>
                            </div>
                            <h4>Hannah Thompsons</h4>
                            <p>Remix Icon is a set of open-source neutral-style 
                                system symbols elaborately crafted for designers and developers.</p>
                        </div>
                    </SwiperSlide>
                  </Swiper>
            </div>
        </section>
        </>
    )
}