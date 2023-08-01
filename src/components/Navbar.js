import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    
    <nav class={'navbar navbar-expand-lg navbar-light bg-dark'}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
 </li>

</ul>
      {/*<form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
  </form>*/}
  <div class={'form-check form-switch text-${props.mode}'}>
  <input class="form-check-input" onClick= {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
</div>
</div>
  </div>
</nav>
   
  )
}
