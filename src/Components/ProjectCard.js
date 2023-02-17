import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectCard.css'

// So we used props to fetch the data we entered in projectdata as an API




const ProjectCard = (props) => {
  return (
    <>
    <div ClassName="project-card">
        <img  className="card-image" src={props.imgad} alt="image"/>
        {/* <h3 style={{
            color:"teal",
            fontSize:"2rem"
        }}>{props.title}</h3> */}
        <div ClassName="pro-details">
            <span className="project-about">{props.about}</span>
            <div className="pro-btns">
                <NavLink target="_blank" to={props.explore} className="buttons">
                    Explore
                </NavLink>
                <NavLink target="_blank" to={props.github} className="buttons">
                    Github
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProjectCard