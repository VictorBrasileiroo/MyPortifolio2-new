import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import ProjectsArea from '../../components/Projects/ProjectsArea'

function Projects() {
  return (
    <>
    <div className='containerProjects'>
        <SideBar />
        <div className='contentProjects'>
          <NavBar/>
          <ProjectsArea/>
        </div>
      </div>
    </>
  )
}

export default Projects
