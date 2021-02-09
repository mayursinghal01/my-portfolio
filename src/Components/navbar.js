import React from 'react'
import {FaAlignJustify} from 'react-icons/fa'
import logo from "../images/icon.png"
import PageLinks from "../constants/links"


const Navbar = ({toggleSidebar}) => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo"/>
                    <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                        <FaAlignJustify></FaAlignJustify>
                    </button>
                </div>
                <PageLinks styleClass="nav-links"></PageLinks>
            </div>
        </nav>
    )
}


export default Navbar
