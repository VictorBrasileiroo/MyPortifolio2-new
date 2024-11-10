import React from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import Habilidades from '../../components/Habilidades/Habilidades'
import TecsArea from '../../components/TecsArea/TecsArea'

function Skills() {
  return (
    <>
      <div className='containerSkills'>
        <SideBar />
        <div className='contentSkills'>
          <NavBar/>
          <Habilidades/>
          <TecsArea/>
        </div>
      </div>
    </>
  )
}

export default Skills
