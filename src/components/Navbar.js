import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Unsplash</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className="form-check form-switch" >
                            <input onClick={props.ChangeMode} className="form-check-input" type="checkbox" style={{ boxShadow: "none" }} id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${props.ModeTextColor}`}  htmlFor="flexSwitchCheckDefault">Enable {props.ModeName}  Mode</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
