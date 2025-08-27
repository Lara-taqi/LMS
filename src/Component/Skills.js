import { Container } from "react-bootstrap"
import Buttons from "./buttons"
import "./stylee.css";
function Skills(){
    return(
              <section className="Learn_new_skill">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/free-course-967x1024.png" alt='about'
              />
            </div>
            <div className="col-md-6 Learn_new_skill_content">
              <h2 className="Learn_new_skill_text">
                 Learn New Skills To Go
                <span style={{ textDecoration: "underline" }}> Ahead For Your</span> Career.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, 
                original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.
              </p>
                 <strong>Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</strong>
             <div><Buttons className="Explore_btn"><span>Explore More</span></Buttons></div>
             </div>
              
             </div>
         
        </Container>
      </section>
    )
}export default Skills