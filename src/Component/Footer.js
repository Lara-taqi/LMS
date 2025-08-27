import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF,  FaInstagram, FaYoutube, FaPinterest,FaMobileAlt } from 'react-icons/fa';
import { BsEnvelope } from 'react-icons/bs';
import "./stylee.css";
import { BsMap } from 'react-icons/bs';

 function Footer() {
  return (
    <footer className="main-footer">
      <section>
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/logo3.png" alt='edusion logo'/>
                
              </h6>
              <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae risus nec dui venenatis dignissim
              </p>
              <p> CONNECT WITH : 
        <a href="/" ><FaInstagram /></a>              
          <a href="/" ><FaFacebookF /></a>
          <a href="/" ><FaYoutube /></a>
          <a href="/" ><FaPinterest  /></a>
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Courses</h6>
              <p><a href="#!" >Creative Writing </a></p>
              <p><a href="#!" >Digital Marketing</a></p>
              <p><a href="#!" >SEO Business</a></p>
              <p><a href="#!" >Social Marketing</a></p>
              <p><a href="#!" >Graphics Design</a></p>
              <p><a href="#!" >Website Development </a></p>
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Company</h6>
              <p><a href="#!" >About Us </a></p>
              <p><a href="#!" >Knowledge Base</a></p>
              <p><a href="#!" >Affiliate Program</a></p>
              <p><a href="#!" >Community</a></p>
              <p><a href="#!" >Marke API</a></p>
              <p><a href="#!" >Support Team</a></p>
            </Col>

            <Col md={4} lg={3} xl={3} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact Info</h6>
              <p style={{fontSize:'25px',fontWeight:'500'}}><FaMobileAlt className="me-2" size={35} style={{ color: '#2ecc71' }}/>Phone Number
               </p>
               <p style={{marginLeft:'40px',marginTop:'-20px'}}>+88 457 845 695</p>
              <p  style={{fontSize:'25px',fontWeight:'500'}}><BsEnvelope size={40} style={{ color: '#2ecc71' }} className="me-2" />Email Address</p>
              <p style={{marginLeft:'40px',marginTop:'-20px'}}>exmple#yourmail.com</p>
              <p  style={{fontSize:'25px',fontWeight:'500'}}> <BsMap size={35} style={{ color: '#2ecc71' }} className="me-2" />Location</p>
              <p style={{marginLeft:'40px',marginTop:'-20px'}}>California, USA</p>
              
            </Col>
          </Row>
        </Container>
      </section>
        <hr className='line'></hr>
      <div className=" p-4 footer-2" >
        
      <div className="copyRight">
        © {new Date().getFullYear()} Edusion. All Rights Reserved
      </div>
      <div className="footerLinks">
        <a href="/">Terms & Conditions</a>
        <a href="/">Special</a>
        <a href="/">Privacy Policy</a>
      </div>
      </div>
    </footer>
  );
}export default Footer;
