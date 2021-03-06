import React,{useState} from 'react'
import {Container} from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
// import "../style/contact.css"

const Contact = () => {

    const[formState,setFormState] = useState({
        name: "",
        email: "",
        message:""
    })
    const [show,setShow] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
      }

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }
    const AlertsA =() => {
        return(
            <div className="alert alert-warning alert-dismissible fade show text-center" role="alert">
            <strong>Message received.</strong>Thanks! I'll be in touch with you shortly
            
          </div>
        )
    }

    const handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...formState })
        })
          .then(() => {
            setFormState({
                name:"",
                email:"",
                message:""
            })
            setShow(true);
            setTimeout(() => {
                setShow(false)
            },5000);
            console.log('aaa');
          })
          .catch(error => alert(error));
        e.preventDefault();
      };
    return(
        <>
        <Container className="p-4 " style={{paddingTop:20,mt:-1}} id="contact">
            <h1 className="text-center col-md-12 col-sm-12 heading">Thanks for taking the time to reach out <br/> Get in Touch</h1>
            <div className="container row justify-content-center" style={{margin:0}}>
                    {
                        show ? <AlertsA/> : ''
                    }
           
                <form onSubmit={handleSubmit} 
                    className="row justify-content-center col-md-10 mt-3 pt-3" 
                    name="contact" 
                    method="post" 
                    data-netlify="true" 
                    data-netlify-honeypot="bot-field" > 
                     
                    <input type="hidden" name="form-name" value="contact" />
                    
                    <div className="col-md-4  p-2">
                        <label className="form-label">Name</label>
                        <input onChange={handleChange} 
                                value={formState.name} 
                                name="name" type="text" 
                                className="form-control p-2" 
                                id="name"
                                required/>
                    </div>


                    <div className="col-md-4 p-2">
                        <label  className="form-label">Email</label>
                        <input type="email" 
                                onChange={handleChange} 
                                name="email" 
                                value={formState.email} 
                                className="form-control p-2" 
                                id="email"
                                required/>
                    </div>


                    <div className="col-md-8  mt-2 mb-4 p-2">
                        <label className="form-label">Message</label>
                        <textarea className="form-control" 
                                name="message" 
                                onChange={handleChange} 
                                value={formState.message}  
                                id="textarea" 
                                style={{height:200}}
                                required/>
                    </div>


                    <div className="row justify-content-center  ">
                    <button type="submit"  className="submit-btn col-md-3 col-sm-6" >Submit</button>
                    </div>
                </form>

            </div>
            <div className="row justify-content-center ">
                <div className="col-md-5 col-sm links text-center">
                    <a href="https://github.com/mayursinghal01">
                        <Icon name="github" size="big" />
                    </a>
                    
                    <a href="https://www.linkedin.com/in/mayur-singhal-415494196/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                        </svg>
                    </a>
                    <a href="https://t.me/mayur_singhal">
                        <Icon name="paper plane" size="big"/>
                    </a>
                    <a href="mailto:mayursinghal33@gmail.com">
                        <Icon name="mail" size="big"/>
                    </a>
                </div>
            </div>
        </Container>
        </>
    )
}

export default Contact;