import "./stylee.css";
import { Container, Col,Row} from "react-bootstrap";

function Topicstolearn(){
    return(
        <section className="Learn">
       <div className="title">
          <div className="sec-head">
             <h2>START LEARNING </h2>
      </div>
 <div className="head-title">
          <h2>Popular <span> Topics To Learn</span> From Today </h2>
  </div>
  </div>
    <Container className="mt-4 Topics">
      <Row>
        <Col md={4}>
         <div className="learnConent d-flex align-items-center">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct5.svg" alt="Business" className="learnImage"/>
            <div className="textContent">
            <h2>
            <a href="/" className="learnTitle">Business</a>
            </h2>
            <span className="learnCourses">1 Courses</span>
             </div>
          </div>
        </Col>
        <Col md={4}>
         <div className="learnConent d-flex align-items-center">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct6.svg" alt="dara science" className="learnImage"/>
            <div className="textContent">
            <h2>
            <a href="/" className="learnTitle">Data Science</a>
            </h2>
            <span className="learnCourses">1 Courses</span>
             </div>
          </div>
        </Col>
        <Col md={4}>
         <div className="learnConent d-flex align-items-center">
             <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct2.svg" alt="Digital Program" className="learnImage"/>
            <div className="textContent">
            <h2>
            <a href="/" className="learnTitle">Digital Program</a>
            </h2>
            <span className="learnCourses">2 Courses</span>
             </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
         <div className="learnConent d-flex align-items-center">
             <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct3.svg" alt="Finance" className="learnImage" /> 
            <div className="textContent">
            <h2>
            <a href="/" className="learnTitle">Finance</a>
            </h2>
            <span className="learnCourses">2 Courses</span>
             </div>
          </div>
        </Col>
        <Col md={4}>
         <div className="learnConent d-flex align-items-center">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct4.svg" alt="Modern Physics"className="learnImage"/>
            <div className="textContent">
            <h2>
            <a href="/" className="learnTitle">Modern Physics</a>
            </h2>
            <span className="learnCourses">3 Courses</span>
             </div>
          </div>
            </Col>
        <Col md={4}>
         <div className="learnConent d-flex align-items-center">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct1.svg" alt="UI/UX Design" className="learnImage"/>
         <div className="textContent">
         <h2>
           <a href="/" className="learnTitle">UI/UX Design</a>
         </h2>
            <span className="learnCourses">3 Courses</span>
        </div>
      </div>
        </Col>
      </Row>
    </Container>

        </section>

    );

}export default Topicstolearn;