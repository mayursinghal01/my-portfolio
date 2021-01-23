import React from "react"
import { Icon } from "semantic-ui-react"
import "../style/nav.css"
import logo from "../images/logo.png"

const Navbar = () => {

   return(
    <div className="mynav">
    <div className="logo">
      <img src={logo} height="95" width="95" />
      <span style={{marginLeft:20,marginTop:10}}>MS</span>
    </div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <Icon name="bars"/>
      </label>
      <ul>
        <li><a  href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
    </div>
   )
}
export default Navbar;
