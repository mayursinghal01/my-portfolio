import React from "react"
import { Icon } from 'semantic-ui-react'
import About from "../Components/about-me"
import Contact from "../Components/contact"
import Home from "../Components/home"
import Navbar from "../Components/navbar"
import Projects from "../Components/projects"
const IndexPage = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default IndexPage
