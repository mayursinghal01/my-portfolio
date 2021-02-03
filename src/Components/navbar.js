import React from "react"
import "../style/nav.css"
import icon from "../images/icon.png"
import { Link } from "gatsby"


const Navbar = () => {
 

   return(
    <nav className="navbar navbar-dark">
    <div className="container-fluid">
    <div className="logo">
      <a className="navbar-brand" href="/" style={{color:"#17252a"}}>
        <img src={icon} alt="" height="85" width="85" />
        MS
      </a>
    </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample01" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon">
          
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample01">
        <ul className="navbar-nav text-center">
          <li className="nav-item active">
            <Link className="nav-link " aria-current="page" to="#home">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" aria-current="page" to="#about">About Me</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" aria-current="page" to="#project">Projects</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" aria-current="page" to="#contact">Contact</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
   )
}
export default Navbar;
