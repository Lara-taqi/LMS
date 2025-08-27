import Homesection from "./Homesection";
import Navegation from "./Navbar";
import Skills from "./Skills";
import BestFeature from "./Bestfeatures";
import "./stylee.css";
import Achievement from "./Achievement";
import Trustedcompany from "./image-scroll";
import Footer from "./Footer";
import Instructors from "./Instructors";
import Generalquestion from "./GeneralQuestion";
import { useEffect, useState } from "react";
import Buttons from "./buttons";
function Aboutus(){
    const [Titlestyle,setTitlestyle]=useState(false);
    useEffect(()=>{
        setTitlestyle(true);
    },[])
    return(
        <>
        <Navegation
        showSecondheader={false}
        />
        <Homesection className="Aboutus"
        sectionId={"AboutusSec"}
        title={"About Us"}
        showButton={true}
        showContent={false}
        showSearch={false}
        buttonText="Home/Aboutus"
        Titlestyle={Titlestyle}
        />
        <Skills/>
        <BestFeature/>
        <Achievement/>
        <Instructors/>
        <Generalquestion/>
        <Trustedcompany/>
        <Footer/>
        <Buttons className="travelbutton"><a href="#AboutusSec"><i className="bi bi-chevron-up"></i></a></Buttons>
        </>
    )
}export default Aboutus;