import { Container } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
function Generalquestion(){
    return(
        <section className="Generalsection">
      <div className="title">
        <div className="sec-head">
         <h2>FREQUENTLY ASKED QUESTION</h2>
         </div>
         <div className="head-title">
          <h2>General <span>Questions</span></h2>
         </div>
         </div>            
        <Container>
          <div className="row">
            <div className="col-md-6 ">
    <Accordion defaultActiveKey="0" className="Accordion_sec" >
      <Accordion.Item eventKey="0" className="Accordion_content">
        <Accordion.Header className="Accordionheader">What dose it take excellent author?</Accordion.Header>
        <Accordion.Body>
         Great value and so easy to use and saves me so much time!
        I was shocked by how much time and brain energy it saved me. 
        Simple & easy gotta love that. Great value and so easy to use.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className="Accordion_content">
        <Accordion.Header>Who will view my content?</Accordion.Header>
        <Accordion.Body>
        Great value and so easy to use and saves me so much time! 
        I was shocked by how much time and brain energy it saved me. 
        Simple & easy gotta love that. Great value and so easy to use.

        </Accordion.Body>
      </Accordion.Item>
          <Accordion.Item eventKey="2" className="Accordion_content">
        <Accordion.Header>Whats dose it take become an author?</Accordion.Header>
        <Accordion.Body>
        Great value and so easy to use and saves me so much time! 
        I was shocked by how much time and brain energy it saved me. 
        Simple & easy gotta love that. Great value and so easy to use.
        </Accordion.Body>
      </Accordion.Item>
        <Accordion.Item eventKey="3" className="Accordion_content">
        <Accordion.Header>How to Change my Password easily?</Accordion.Header>
        <Accordion.Body>
        Great value and so easy to use and saves me so much time! 
        I was shocked by how much time and brain energy it saved me. 
        Simple & easy gotta love that. Great value and so easy to use.
        </Accordion.Body>
      </Accordion.Item>  
        <Accordion.Item eventKey="4" className="Accordion_content">
        <Accordion.Header>How dose it create content?</Accordion.Header>
        <Accordion.Body>
        Great value and so easy to use and saves me so much time! 
        I was shocked by how much time and brain energy it saved me. 
        Simple & easy gotta love that. Great value and so easy to use.
        </Accordion.Body>
      </Accordion.Item>  
    </Accordion>                
             
             </div>  
            <div className="col-md-6">
              <img
                src="	https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/faq.png" alt='about'
              />
            </div>
              
             </div>
         
        </Container>
      </section>        
    )
}export default Generalquestion;