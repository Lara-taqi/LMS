import Navegation from "./Navbar";
import Homesection from "./Homesection";
import FullCourses from "./Fullcourses";
import Footer from "./Footer";
import { useEffect,useState } from "react";
import Buttons from "./buttons";
import "./stylee.css";
function Courses(){
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
        sectionId={"CoursesSec"}
        title={"Courses"}
        showButton={true}
        showContent={false}
        showSearch={false}
        showhomeCourses={false}
        buttonText="Home/Courses"
        Titlestyle={Titlestyle}
        />
        <FullCourses/>
        <Footer/>
        <Buttons className="travelbutton"><a href="#CoursesSec"><i className="bi bi-chevron-up"></i></a></Buttons>
        </>
    )

}export default Courses;