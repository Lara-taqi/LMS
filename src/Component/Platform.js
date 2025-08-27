import { Container } from "react-bootstrap";
import Buttons from "./buttons";
function Platform () {
return(
    <>
    <section className="Platform_sec">
        <div className="platform">
        <Container>
            <div className="row">
                <div className="col-md-6">
       <div className="title">
          <div className="sec-head">
             <h2>Best Online Learning platform</h2>
      </div>
 <div className="head-title">
          <h2 >One Platform & Many <span> Courses</span> For You  </h2>
  </div>
   
  <div className="platform_content">
        <p>From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
        <ul>
            <li> <span className="check"> </span>9/10 Average Satisfaction Rate </li>
            <li> <span className="check"></span>96% Completitation Rate</li>
            <li> <span className="check"></span>Friendly Environment & Expert Teacher</li>
        </ul>
         <Buttons className="circleButton">EXPLORE OUR COURSES <i className="bi bi-arrow-right"></i></Buttons>
        </div> </div>
                </div>
                <div className="col-md-6 plat_img">
                    <img src="	https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/about5.png" alt="platforms"></img>
                </div>
            </div>
        </Container>
        </div>
    </section>
    </>
)
} export default Platform;