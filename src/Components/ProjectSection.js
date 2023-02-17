import React from 'react'
import './ProjectCard.css'
import ProjectCard from './ProjectCard'
import ProjectData from './ProjectCardData'

// We gonna use map method to map the values and then we will render the values in project componenet using projectcard

const ProjectSection = () => {
  return (
    <div className="work-container">
        <h3 className="gradient-text">Projects</h3>
        <div className="project-container">
{/* now we gonna map  */}
            {ProjectData.map((value,index)=>{
                return(
                    <ProjectCard
                    key={index}
                    imgad={value.imgad}
                    title={value.title}
                    about={value.about}
                    explore={value.explore}
                    github={value.github}/>
                )
            })}
        </div>
    </div>
  )
}

export default ProjectSection