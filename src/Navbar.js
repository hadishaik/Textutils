import React from "react";
import { Link } from "react-router-dom";


function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode === 'dark' ? 'white' : 'dark'}`} placeholder="onFocus is triggered when you click this input."
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="\">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-
          target="\navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse text-${props.mode === 'dark' ? 'white' : 'dark'}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode === 'dark' ? 'white' : 'dark'}`} to="/about">{props.about}</Link>
            </li>
        
          </ul>
          <form className="d-flex" role="search">
            <div className={`form-check form-switch`} >
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch"
                id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Enable Dark Mode </label>
            </div>
        
          </form>

        </div>
      </div>
    </nav>
  );
}


export default Navbar;