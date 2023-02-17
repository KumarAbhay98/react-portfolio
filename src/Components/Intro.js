import React, { useEffect } from 'react';
import './Intro.css';
import 'animate.css';
import Typewriter from 'typewriter-effect'
import introImg from "../assets/abhays dp.jpeg";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Nwantiti from '../assets/Nwantiti.mp3'




const Intro = () => {
    // using Aos here by using useEffect hook
    useEffect(() => {
        Aos.refresh({duration:3000});
        Aos.init({ duration: 3000 });
    }, [Intro]);


    return (
        <>
            <div id="section1" className="intro">
                <div className="intro-content">
                    <div class="intro-left">
                        <audio data-aos="fade-left" className='audio-bg' controls autoplay loop>
                            <source src={Nwantiti} type="audio/mp3" />
                        </audio>
                        <div className="intro-details animate__animated animate__flip">

                            <div className="vl animate-border"></div>
                            <div data-aos="fade-right" className="vl2 animate-border"></div>
                            <p>
                                <Typewriter
                                options={{
                                    autoStart:true,
                                    delay:2,
                                    strings:[
                                        "My name is Abhay Kumar currently pursuing btech. in Information Technology(batch 2024) from Harcourt Butler Technical University, Kanpur I completed my 10th and 12th from KapilMuni Childrens Academy Mainpuri in the year 2017 and 2019 respectively .I am a coding enthusiast and currently exploring advance react concepts, I have hands on experince to work on the frontend part of any project with a core knowledge of stacks that are needed for an attractive UI. I'm a web developer and I'm here to share my thoughts with you. I'll be writing about all things related to my work, which includes Web Development, Writing Articles, Frontend design and more."

                                    ]
                                }}/>
                            </p>
                            <p className="portfolio">Portfolio</p>
                        </div>
                    </div>
                    <div data-aos="fade-left" className="intro-right">
                        <div className="img">
                            <img className="intro-img animate__animated animate__bounceInDown" src={introImg} alt="coverImage" />
                        </div>
                        <div className="this-is-me">
                            <span>This is me!</span>
                            <div data-aos="fade-up" className="decoration-block">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>JQuery</li>
                                    <li>Bootstrap</li>
                                    <li>TailwindCss</li>
                                    <li>React</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                            <h6 style={{
                                color: "teal"
                            }}>Skills</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro