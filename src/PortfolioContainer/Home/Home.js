import React from 'react'
import Profile from './Profile/Profile'
import Footer from './Footer/Footer'
import './Home.css'
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe'
import Skills from '../../PortfolioContainer/Skills/Skills'

export default function Home() {
    return (
        <div className="home-container ">
            <div className="header">
                <Profile />
                <Footer />
            </div>
            <AboutMe />
            <Skills />
            <ContactMe />
        </div>

    )
}