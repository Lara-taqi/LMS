import Footer from "./Footer";
import Navegation from "./Navbar";
import Homesection from "./Homesection";
import { FaMobileAlt } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { BsEnvelope } from 'react-icons/bs';
import { useState,useEffect } from "react";
import Buttons from "./buttons";
import "./stylee.css";
import Message from "./Message";
function Contact(){
 const [Titlestyle,setTitlestyle]=useState(false);
    useEffect(()=>{
        setTitlestyle(true);
    },[])
    return(
        <>
        <Navegation
        className="Secondheadercourses"
        showSecondheader={false}
        />
        <Homesection className="Aboutus"
        sectionId={"ContactSec"}
        title={"Contact"}
        showButton={true}
        showContent={false}
        showSearch={false}
        showhomeCourses={true}
        buttonText="Home/Contact"
        Titlestyle={Titlestyle}
        homeCoursesContent={
    <>
      <div className="col-md-4 text-black p-3  Contactinfo">
        <h3><BsMap size={35} style={{ color: '#2ecc71' }} className="me-2" /></h3>
        <h4>Our Location</h4>
        <p>3481 Melrose Place, Beverly Hills
        CA 90210</p>
      </div>
      <div className="col-md-4 text-black p-3 border-start border-end  Contactinfo">
        <h3><FaMobileAlt className="me-2" size={35} style={{ color: '#2ecc71' }}/></h3>
        <h4>Telephone</h4>
        <p>(+1) 517 397 7100<br></br>
        (+1) 411 315 8138</p>
      </div>
      <div className="col-md-4 text-black p-3  Contactinfo">
        <h3><BsEnvelope size={40} style={{ color: '#2ecc71' }} className="me-2" /></h3>
        <h4>Send Email</h4>
        <p>Info@example.com<br></br>
        admin@example.com</p>
      </div>
    </>
  }
/>
        <Message/>
        <Footer/>
         <Buttons className="travelbutton"><a href="#ContactSec"><i className="bi bi-chevron-up"></i></a></Buttons>
       </>
    )
}export default Contact;