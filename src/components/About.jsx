import React from 'react'

const About = () => {
  return <div>
     <div className="content">
        <section className="content-section">
            <div className="content-section-left">
                <p className="section-left-title">Front end
                    <span> Developer</span>
                </p>
                <div className="details-section">
                    <p className="section-left-details">A seasoned front-end developer crafting dynamic web experiences for diverse clients across multiple platforms.</p>
                    <p className="section-left-details">I don’t just code – I create engaging and intuitive interfaces, infusing creativity and strategy into every interaction.</p>
                </div>

                <div className="section-left-buttons">
                    <a href="#projects" className="section-left-button" id="start-button">View Projects</a>
                    <a href="#contact" className="section-left-button" id="tour-button">Reach Out</a>
                </div>
            </div>
            <div className="content-section-right">
                <div className="content-section-right-image">
                    <div className="content-section-right-image-container">

                    </div>
                </div>
            </div>
        </section>
    </div>
  </div>
}

export default About