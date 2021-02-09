import React,{useState,useEffect} from "react"
import { Helmet } from "react-helmet"
import About from "../Components/about-me"
import Contact from "../Components/contact"
import Home from "../Components/home"
import Navbar from "../Components/navbar"
import Projects from "../Components/projects"
import Sidebar from "../Components/sidebar"
import favicon from "../images/icon.png"
import GridLoader from "react-spinners/GridLoader";

const IndexPage = () => {

  const [loading,setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  }, [])

 

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
      {
        loading ?
        <div className="Loader">
          <GridLoader  color={"#DEF2F1"} loading={loading} size={50} />
        </div>
        :
        <>
          <Navbar toggleSidebar = {toggleSidebar}/>
          <Sidebar isOpen={isOpen} toggleSidebar = {toggleSidebar} />
          <Home/>
          <About/>
          <Projects/>
          <Contact/>
        </>
      }
      
    </div>
  )
}

export default IndexPage
