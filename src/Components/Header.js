import React from 'react'
import './Header.css'
import Typewriter from 'typewriter-effect'
import projectImg from '../assets/Project.png'


const Header = () => {
    return (
        <>
            <div class="context">
                <div className="h-left">
                    <img className="project-img" src={projectImg} alt="Project" />
                </div>
                <div className="h-right">
                    <span>
                        <Typewriter
                           options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                                "This Section is all about my projects.I have developed two projects and this portfolio gonna be the third one All of the projects are frontend oriented and has very interactive UI Components.The first project."
                            ]
                        }}/>
                    </span>
                </div>
            </div>
            <div class="area" >
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </>
    )
}
export default Header