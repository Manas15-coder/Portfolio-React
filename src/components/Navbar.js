import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <section id="navbar">
                <section id="navbar">
                        <nav className="navbar navbar-expand-lg bg-body-transparent fixed-top">
                            <div className="container-fluid">
                                <a className="navbar-brand">
                                    <Link to="/">Manas</Link>
                                </a>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div
                                    className="collapse navbar-collapse justify-content-end"
                                    id="navbarNav"
                                >
                                    <ul className="navbar-nav">
                                        <li className="nav-item active">
                                            <Link className="nav-link active" to ='/'> About</Link>
                                        </li>
                                        <li className="nav-item">
                                        <li className="nav-item">
                                            <Link className="nav-link" to ='/Skills'> Skills</Link>
                                        </li>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to ='/Projects'>Projects</Link>
                                        </li>
                                        <li className="nav-item">
                                        <li className="nav-item">
                                            <Link className="nav-link" to ='/Contact'> Contact</Link>
                                        </li>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </section>

                </section>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
