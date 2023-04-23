import React from 'react'
import '../App.css'
import project1 from '../assets/../assets/wazirxclone.png'
import project2 from '../assets/../assets/newsapi.png'
import project3 from '../assets/../assets/crypto.png'
import project4 from '../assets/../assets/countryapi.png'
import project5 from '../assets/../assets/coviddashboard.png'
import project6 from '../assets/../assets/notes.png'

function Projects() {
  return (
    <div>
        <div className='project container'>
        <div className='row'>
            <div className='col-md-12'>
<section id="project">
  <div className="container-fluid">
    <h2 className='project-heading'>Projects</h2>
    <div className="row">
      <div className="col-md-6">
        <a href="https://startling-blini-b12e3e.netlify.app/">
          <img src={project1} className="project-img" alt="" />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://dancing-bonbon-bb3e53.netlify.app/">
          <img src={project2} className="project-img" alt="" />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://precious-starlight-18c761.netlify.app/">
        <img src={project3} className="project-img" alt="" />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://mellow-phoenix-6932ba.netlify.app/">
        <img src={project4} className="project-img" alt="" />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://covid-19statusdashboard.netlify.app/">
        <img src={project5} className="project-img" alt="" />
        </a>
      </div>
      <div className="col-md-6">
        <a href="https://charming-lollipop-6a7c24.netlify.app/">
        <img src={project6} className="project-img" alt="" />
        </a>
      </div>
    </div>
  </div>
</section>

            </div>
        </div>
      
    </div>
      
    </div>
  )
}

export default Projects
