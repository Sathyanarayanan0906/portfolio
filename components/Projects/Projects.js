import React from 'react'
import Projectlist from './Projectlist'
import Projectapi from './Projectapi'
import './projectimgstyle.css'
const Projects = () => {
  return (
    <div id="projects">
      <div className='project-intro'>
              <center><p className='intro-title'>Projects</p></center>
          </div>
       <div className='prolist'>
        {
            Projectapi.map((prolist,index)=>{
                return <Projectlist list={prolist} key={index}/>
            })
        }     
    </div>
    </div>
   
  )
}

export default Projects