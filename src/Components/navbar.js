import React from "react"
import "../style/nav.css"
import icon from "../images/Icon.png"
import { Link } from "gatsby"


const Navbar = () => {
 

   return(
    <nav class="navbar navbar-dark border-bottom">
    <div class="container-fluid">
    <div className="logo">
      <a className="navbar-brand" href="#" style={{color:"#82c232"}}>
        <img src={icon} height="85" width="85" />
        MS
      </a>
    </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">
          
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample01">
        <ul class="navbar-nav text-center">
          <li class="nav-item active">
            <Link class="nav-link " aria-current="page" to="#home">Home</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" aria-current="page" to="#about">About Me</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" aria-current="page" to="#project">Projects</Link>
          </li>
          <li class="nav-item active">
            <Link class="nav-link" aria-current="page" to="#contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
   )
}
export default Navbar;
