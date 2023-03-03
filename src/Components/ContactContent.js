import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import './ContactContent.css'

const ContactContent = () => {
    return (
        <>
            <div className="contact-container">
                <div className="contact-content">
                    <div className="contact-card">
                        <h3 className="contact-heading">Contact me...</h3>
                        <a href="https://www.linkedin.com/in/abhay-kumar-6586b220a/" target="_blank"><BsLinkedin size={40} /></a>
                        <a href="mailto:Abhaycbr07@gmail.com" target="_blank"><SiGmail size={40} /></a>
                        <a href="https://github.com/KumarAbhay98" target="_blank"><FaGithub size={40} /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactContent
