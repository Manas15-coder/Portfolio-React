import React from 'react'
import { Link } from 'react-router-dom'
import myCv from '../assets/../assets/ManasResume.pdf'
import '../App.css'

function Home() {
  return (
    <div className='container'>
    <div className='row'>
        <div className='col-md-12'>
            {/*Banner*/}
            <section id="about">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5">
                            <img
                                src="https://cdn3d.iconscout.com/3d/premium/thumb/boy-avatar-6299533-5187865.png"
                                className="image"
                                alt=""
                            />
                        </div>
                        <div className="col-md-7">
                            <h1 className="heading">Hi I'm Manas</h1>
                            <br/>
                            <hr/>
                            <p className="desc-title">
                                Full Stack Intern:{" "}
                                <a href="https://www.innomatics.in/">Innomatics Research Labs</a>{" "}
                            </p>
                            <hr/>
                            <br/>
                            <p className="desc-text">
                                Google Cloud Digital Leader and web designer. I'm Full Stack Intern
                                at Innomatics Research Labs.Achieved certificates from Google
                                Analytics, Data Studio, IBM Cloud Core, Blockchain Essentials, and
                                Data Science Foundation Badges from Cognitive class
                            </p>
                            <div className="btn-class">
                                <a href={myCv} download="">
                                    <button className="btn-download">Download CV</button>
                                </a>
                                <Link to="/Contact">
                                    <button className="btn-contact">Contact</button>
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>

    </div>



</div>
  )
}

export default Home
