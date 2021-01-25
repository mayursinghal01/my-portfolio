import React from 'react'
import "../style/home.css"
import { Icon } from 'semantic-ui-react'
import portfoli from "../images/portfoli.jpeg"
import html from "../images/html.png"
const Home = () => {
    return (
        <div id="home" className="container-fluid d-block" style={{marginTop: -1,paddingTop:50,padding:30,paddingBottom: 0}}>
            <h1 className="text-center heading mt-4" >
                 Full stack Developer & Enthusiast Coder
            </h1>

            <div className="resume text-center d-inline">
                <p>Hi, I'm <span>Mayur Singhal</span>. Nice to meet you.
                    <button className="p-2 ps-4 pe-4 ms-3">Resume 
                        <Icon style={{paddingLeft: 10}} name="file alternate outline"/>
                    </button>
                </p>
            </div>
            <div className="text-center portfolio">
                {/* <Image src={portfoli} className="text-center" size='medium' circular /> */}
                <img src={portfoli} className="img-fluid" alt="" height="250" width="250" style={{zIndex:5,position:'relative'}} />
            </div>
            <div className="text-center" >
                <img src={html} className="img-fluid" alt="" style={{zIndex:0,marginTop: -331}} />
            </div>
            
        </div>
    )
}

export default Home;