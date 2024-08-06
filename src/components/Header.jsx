import React, { useEffect } from 'react'
import hamburger from "/assets/hamburger.svg"

const Header = () => {

    useEffect(() => {
        const mobileNav = document.querySelector('.mobile-nav')
        const headerMenuButton = document.querySelector(".header-menu-button")

        const toggleMobileNav = () => {
            mobileNav.classList.toggle("mobile-nav-active")
        };

        headerMenuButton.addEventListener("click", toggleMobileNav)

        // Cleanup the event listener on component unmount
        return () => {
            headerMenuButton.removeEventListener("click", toggleMobileNav)
        }
    }, [])

    return <>
        <div className="main-container">
            <div className="header">
                <a className="header-logo" href="#logo">
                    <span className="header-logo-text">Paras Verma</span>
                </a>
                <nav className="header-nav">
                    <a className="header-nav-links" href="#skills">Skills</a>
                    <a className="header-nav-links" href="#services">Services</a>
                    <a className="header-nav-links" href="#projects">Projects</a>
                    <a className="header-nav-links" href="#contact">Contact</a>
                </nav>
                <button className="header-menu-button">
                    <img src={hamburger} alt="menu-button" className="header-menu-icon" />
                </button>
            </div>
        </div>

        <nav className="mobile-nav mobile-nav-active">
            <div className="nav-list">
                <a className="header-nav-links" href="#skills">Styles</a>
                <a className="header-nav-links" href="#services">Services</a>
                <a className="header-nav-links" href="#projects">Projects</a>
                <a className="header-nav-links" href="#contact">Contact</a>
            </div>
        </nav>
    </>
}

export default Header