import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Buttons from './buttons';
import "./stylee.css";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaFacebookF, FaTwitter,FaYoutube, FaPinterest } from 'react-icons/fa';


function Navegation({showSecondheader,className}) {
  const [showHome,setshowHome]=useState(false);
  const [showPages,setshowPages]=useState(false);
  const [showCourses,setshowCourses]=useState(false);
  const [showBlog,setshowBlog]=useState(false);
  const navbarTop = showSecondheader ? '90px' : '50px';


  return (
    <>
    <section >
      <div className='firstHeader'>
        <div style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="	https://assets.elements.envato.com/apps/storefront/EnvatoLogoLight-b794a434513b3b975d91.svg" alt="Logo" style={{ height: '20px' }} />
           market
        </div>
        <Button variant="success" size="sm" className='mb-1' style={{backgroundColor:"#27ae60"}}>Buy now</Button>
      </div>
      {showSecondheader && (
      <div className={`secondHeader ${className}`} >
        <div className='container d-flex justify-content-between align-items-center w-100' style={{maxWidth:'1200px',margin: '0 auto',padding: '0 20px'}}>
          <div className='Secondheader_content '>
            <div className='d-flex align-items-center gap-2'>
            <i className="bi bi-telephone-fill"></i>
              <span>+(354) 6800 37849</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
            <i className="bi bi-envelope-fill"></i>
              <span>hello@edusion.com</span>
            </div>
            <div className='d-flex align-items-center gap-2'>
            <i className="bi bi-clock"></i>
            <span>Mon to sat Open: 9am - 6pm</span>
            </div>
          </div>
        </div>
          <div className='Secondheader_social d-flex gap-2'>
            <div className='Socialicons'><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter size={20} /></a></div>
            <div className='Socialicons'><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a></div>
            <div className='Socialicons'><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={20} /></a></div>
            <div className='Socialicons'><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><FaPinterest size={20} /></a></div>
          </div>
      </div>  
  )}
     
    <Navbar expand="lg" bg="light" variant="light" fixed="top" style={{ zIndex: 1050 , top:navbarTop }}>
      <Container fluid className="d-flex align-items-center justify-content-between Nav_Bar_Section">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://wpdemothemes.com/edusion/wp-content/themes/edusion/assets/images/all-img/logo.png"
            width="150"
            height="50"
            alt="Edusion Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar"/>
        <Navbar.Collapse id="main-navbar" className="justify-content-center">
          <Nav>
            <NavDropdown title={<span>Home<i class="bi bi-chevron-down"></i></span>} id="nav-dropdown-home" className="dropDown" show={showHome} onMouseEnter={()=> setshowHome(true)}onMouseLeave={()=>setshowHome(false)}> 
              <NavDropdown.Item href="/">Home 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Home 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Home 3</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span>Pages<i class="bi bi-chevron-down"></i></span>} id="nav-dropdown-pages"  className="dropDown" show={showPages} onMouseEnter={()=> setshowPages(true)} onMouseLeave={()=>setshowPages(false)}>
              <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Instructors Style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Instructors Style 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/4">Events</NavDropdown.Item>
              <NavDropdown.Item href="#action/5">Event Details</NavDropdown.Item>
              <NavDropdown.Item href="#action/6">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/7">404</NavDropdown.Item>
              <NavDropdown.Item href="#action/8">Registration</NavDropdown.Item>
              <NavDropdown.Item href="#action/9">Login</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span>Courses<i class="bi bi-chevron-down"></i></span>} id="nav-dropdown-courses"  className="dropDown"  show={showCourses} onMouseEnter={()=> setshowCourses(true)} onMouseLeave={()=>setshowCourses(false)} >
              <NavDropdown.Item as={Link} to="/courses">Courses Style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Courses Style 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3">Courses Style 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/4">Courses Details Style 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/5">Courses Details Style 2</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title={<span>Blog<i class="bi bi-chevron-down"></i></span>} id="nav-dropdown-blog"  className="dropDown"  show={showBlog} onMouseEnter={()=> setshowBlog(true)} onMouseLeave={()=>setshowBlog(false)}>
              <NavDropdown.Item href="#action/1">Standard Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Blog Details</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className='d-flex gap-5'>
        <div className="d-flex gap-0 scIcons ">
          <button type="button" className="btn btn-link">
            <i className="bi bi-search"></i> 
          </button>

          <button type="button" className="btn btn-link position-relative">
            <i className="bi bi-cart3  position-relative"></i>
            <span className="position-absolute badge rounded-pill bg-success" style={{top:'20%',left:'50%'}}>
              0
            </span>
          </button>
          </div>
          <div className="d-flex gap-3 mb-3">
          <Buttons className="Explore_btn"><span>Login</span></Buttons>
          <Buttons className="btn-signup">Sign Up</Buttons>
        </div>
        </div> 
      </Container>
    </Navbar>
    </section>
    </>
  );
}

export default Navegation;
