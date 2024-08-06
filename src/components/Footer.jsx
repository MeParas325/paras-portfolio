import React from 'react'

const socialLinks = [
    {
        link: "https://www.linkedin.com/in/paras-verma-009755211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        social: "LinkedIn",
        class: "bx bxl-linkedin-square",
    },
    {
        link: "https://www.instagram.com/paras277376?utm_source=qr&igsh=ZGNqd29jajd2Zmx1",
        social: "Instagram",
        class: "bx bxl-instagram-alt",
    },
    {
        link: "https://x.com/ParasVerma34015?t=kLLveuCWpOfxytIvJGdl_Q&s=08",
        social: "Twitter",
        class: "bx bxl-bx bxl-twitter",
    },
    {
        link: "https://github.com/MeParas325",
        social: "github",
        class: "bx bxl-github",
    }
]

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social">
                {
                    socialLinks.map((v, i) => (
                        <div className="social-icons" key={i}>
                            <a target="_blank" href = {v.link}><i className = {v.class}></i></a>
                            <p>{v.social}</p>
                        </div>
                    ))
                }
            </div>
            <div className="lit">
                <p className="copyright">
                    @ Paras Verma | All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer