import React from 'react'
import '../styles/models.css'
import Image1 from '../assets/watercolor.jpg'

const Models = () => {
  return (
    <section id='model'>
        <div className="container models-container">
            <div className="top-models">
                <h2 className="section-title">About <span className='highlights'> Dino</span></h2>

                <p>Computer vision is an interdisciplinary scientific field that deals with <br/>how computers 
                        can gain high-level understanding.</p>
            </div>

            <div className="models-wrapper">
                <div className="model-item">
                    <span className="model-icon">
                        <img src={Image1} alt='eye'/>
                    </span>

                    <div className="info-content">
                        <h4>Healthy Life</h4>
                        <p>Thank you for using our service. If you could share our website with your friends,
                             that would be a great help.</p>
                    </div>
                </div>

                <div className="model-item">
                    <span className="model-icon">
                        <img src={Image1} alt='eye'/>
                    </span>

                    <div className="info-content">
                        <h4>Healthy Life</h4>
                        <p>Thank you for using our service. If you could share our website with your friends,
                             that would be a great help.</p>
                    </div>
                </div>

                <div className="model-item">
                    <span className="model-icon">
                        <img src={Image1} alt='eye'/>
                    </span>

                    <div className="info-content">
                        <h4>Healthy Life</h4>
                        <p>Thank you for using our service. If you could share our website with your friends,
                             that would be a great help.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Models
