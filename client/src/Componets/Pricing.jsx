import React from 'react'
import '../styles/pricing.css'

const Pricing = () => {
  return (
    <section id='pricing'>
        <div className="container">
            <div className="pricing-top">
                <h2 className="section-title">
                     Dino <span className='highlights'>Pricing</span> Plan
                </h2>
                <p>
                Remix Icon is a set of open-source neutral-style system symbols <br/>
                 elaborately crafted for designers and developers.
                </p>
            </div>

            <div className="pricing-wrapper">
                <div className="pricing-item">
                    <div className="pricing-card-top">
                        <h2 className='section-title'>Free </h2>
                        <h2 className='pricing'>$0<span>/Month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Unlimited access to the tool</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Customer support</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Free tools</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Standard options</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Unlimited projects</li>
                        </ul>

                        <button className='register-btn'>Join Now</button>
                    </div>
                </div>

                <div className="pricing-item pricing-item-02">
                    <div className="pricing-card-top">
                        <h2 className='section-title'>Bronze</h2>
                        <h2 className='pricing'>$250<span>/Month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Unlimited access to the tool</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Customer support</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Free tools</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Standard options</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Unlimited projects</li>
                        </ul>

                        <button className='register-btn'>Join Now</button>
                    </div>
                </div>

                <div className="pricing-item">
                    <div className="pricing-card-top">
                        <h2 className='section-title'>Gold</h2>
                        <h2 className='pricing'>$500<span>/Month</span></h2>
                    </div>
                    <div className="services">
                        <ul>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Unlimited access to the tool</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Customer support</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Free tools</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Standard options</li>
                            <li><span><i class='ri-checkbox-blank-circle-fill'></i></span>Unlimited projects</li>
                        </ul>

                        <button className='register-btn'>Join Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pricing
