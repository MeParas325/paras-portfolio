import React from 'react'
import uiImage from '/assets/services/ui.svg';
import mobileImage from '/assets/services/mobile.svg';
import interactiveImage from '/assets/services/interactive.svg';

const myServices = [
    {
        title: 'UI/UX Design',
        about: 'Creating visually appealing and user-friendly interfaces for websites and web applications.',
        class: 'bx bxl-tiktok',
        imageUrl: uiImage,
    },
    {
        title: 'Responsive Design',
        about: 'Ensuring that websites and web applications are accessible and functional across various devices and screen sizes.',
        class: 'bx bx-video-recording',
        imageUrl: mobileImage,
    },
    {
        title: 'Interactive Design',
        about: 'Develop interactive and dynamic web experiences by using JavaScript and other frontend libraries or frameworks like React',
        class: 'bx bxl-youtube',
        imageUrl: interactiveImage,
    },
]

const Services = () => {
    console.log(myServices[0].title)
    return <>
        <section className="services" id="services">
            <h2 className="heading">Services</h2>
            <p className="about">I specialize in turning design concepts into responsive, interactive, and efficient web experiences. With a strong command of HTML, CSS, and JavaScript and React</p>
            <div className="services-container">
                {
                    myServices.map((v, i) => (
                        <div key={i} className="service-box">
                            <div className="service-info">
                                <i style={{
                                    backgroundImage: `url(${v.imageUrl})`,
                                    backgroundSize: 'cover',
                                    color: 'white',
                                    display: 'block',
                                    width: '50px', // Adjust the width as needed
                                    height: '50px', // Adjust the height as needed
                                }}></i>
                                <h4>{v.title}</h4>
                                <p>{v.about}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
}

export default Services