import React, { useEffect } from 'react';
import './Footer.css'
import { FaHome, FaPhone, FaMailBulk, FaGithub, FaInstagram } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="footer">
                <div className="contents">
                    <div className="left">
                        <h4>Thought</h4>
                        <p data-aos="flip-left">We must change our attitude and believe that we will succeed one day. Moreover, we also need to implement positive thinking techniques which will help us learn from our failures and stay focused. As positive thinking plays an essential role in our lives, we must make sure to adopt in our lives.</p>
                        <div className="social-footer">
                            <a href="https://www.linkedin.com/in/abhay-kumar-6586b220a/" target="_blank"><BsLinkedin size={20} /></a>
                            <a href="https://github.com/KumarAbhay98" target="_blank"><FaGithub size={20} /></a>
                            <a href="https://www.instagram.com/abhay.sahil/" target="_blank"><FaInstagram size={20} /></a>
                        </div>
                    </div>
                    <div className="right">
                        <div data-aos="flip-right" className="location">
                            <FaHome size={25} style={{
                                color: "black", marginRight: "2rem"
                            }} />
                            <div data-aos="fade-right">
                                <p style={{
                                    color:"white"
                                }}>Harcourt Butler Technical University</p>
                                <p style={{
                                    color:"white"
                                }}>Kanpur</p>
                            </div>
                        </div>
                        <div data-aos="fade-down" className="phone">
                            <h4><FaPhone size={20} style={{
                                color: "black", marginRight: "2rem"
                            }} />+91 6306671630</h4>
                        </div>
                        <div data-aos="fade-down" ClassName="email">
                            <h4><FaMailBulk size={20} style={{
                                color: "black", marginRight: "2rem"
                            }} />Abhaycbr07@gmail.com</h4>
                        </div>
                        <div className="copyrights">
                            <div data-aos="fade-up">Copyright © 2023 @Abhay_Kumar</div>
                            <div>
                                Portfolio is a registered trademark, Inc. <br /> All rights
                                reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer