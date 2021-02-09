import React,{useState} from "react"
import { Helmet } from "react-helmet"
import About from "../Components/about-me"
import Contact from "../Components/contact"
import Home from "../Components/home"
import Navbar from "../Components/navbar"
import Projects from "../Components/projects"
import Sidebar from "../Components/sidebar"
import favicon from "../images/icon.png"


const IndexPage = () => {

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Mayur Singhal</title>
          
            <link rel="icon" href={favicon} />
    
        </Helmet>
      <Navbar toggleSidebar = {toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar = {toggleSidebar} />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default IndexPage
