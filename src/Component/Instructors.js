import { Card } from "react-bootstrap";
import "./stylee.css";
function Instructors(){
   return(
    <>
     <div className="title">
        <div className="sec-head">
            <h2>TEAM MEMBER</h2>
           </div>
         <div className="head-title">
          <h2 >Our Expert <span> Instructors</span> </h2>
       </div>
  </div>
     <div className="container">
      <div className="Instructors_info row justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ borderRadius:'0' }}>
        <div className="instructorsImg">
      <Card.Img variant="top" src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team2.jpg" alt="team 1" style={{borderRadius:'0'  }}/>
      <div className="instructorsSocial">
         <a href="/"><i className="bi bi-facebook"></i></a>
         <a href="/"><i className="bi bi-twitter"></i></a>
         <a href="/"><i className="bi bi-linkedin"></i></a>
       </div>         
        <div className="card-overlay"/>
        </div>
      <Card.Body>
        <Card.Title  className="instructorName">
            <a href="/">Daniel Miller</a>
            <div className="instructorStyle">
                <span><i className="bi bi-dot"></i></span>
            </div>
            
            </Card.Title>
        <Card.Text className="instructorContent">
            <span>Logo Expert</span>
            <div className="instructorIcons">
                <span><i className="bi bi-file-earmark"></i>3 Courses</span>
                <span><i className="bi bi-person"></i>3 Students</span>
            </div>    
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <Card style={{borderRadius:'0'  }}>
            <div className="instructorsImg">
      <Card.Img variant="top" src="	https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team1.jpg" alt="team2" style={{borderRadius:'0'  }} />
      <div className="instructorsSocial">
         <a href="/"><i className="bi bi-facebook"></i></a>
         <a href="/"><i className="bi bi-twitter"></i></a>
         <a href="/"><i className="bi bi-linkedin"></i></a>
       </div>        
      <div className="card-overlay"/>
      </div>
      <Card.Body>
        <Card.Title className="instructorName">
            <a href="/">Masum Billah</a>
            <div className="instructorStyle">
                <span><i className="bi bi-dot"></i></span>
            </div>            
            
            </Card.Title>
        <Card.Text className="instructorContent">
            <span>Developer</span>
            <div className="instructorIcons">
                <span><i className="bi bi-file-earmark"></i>6 Courses</span>
                <span><i className="bi bi-person"></i>5 Students</span>
            </div>              

        </Card.Text>
      </Card.Body>
    </Card>
    </div>
     <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ borderRadius:'0'  }}>
        <div className="instructorsImg">
      <Card.Img variant="top" src="	https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-vladimir-kudin-10141145.jpg" alt="team3" style={{borderRadius:'0'  }}/>
      <div className="instructorsSocial">
         <a href="/"><i className="bi bi-facebook"></i></a>
         <a href="/"><i className="bi bi-twitter"></i></a>
         <a href="/"><i className="bi bi-linkedin"></i></a>
       </div>  
      <div className="card-overlay"/>
      </div>
      <Card.Body>
        <Card.Title  className="instructorName">
            <a href="/">Kenneth Renteria</a>
            <div className="instructorStyle">
                <span><i className="bi bi-dot"></i></span>
            </div>            
            </Card.Title>
        <Card.Text className="instructorContent">
            <span>Marketr</span>
            <div className="instructorIcons">
                <span><i className="bi bi-file-earmark"></i>0 Courses</span>
                <span><i className="bi bi-person"></i>0 Students</span>
            </div>            
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <Card style={{ borderRadius:'0'  }}>
        <div className="instructorsImg">
      <Card.Img variant="top" src="	https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-boris-hamer-16645409.jpg"  alt="team4" style={{borderRadius:'0'  }}/>
      <div className="instructorsSocial">
         <a href="/"><i className="bi bi-facebook"></i></a>
         <a href="/"><i className="bi bi-twitter"></i></a>
         <a href="/"><i className="bi bi-linkedin"></i></a>
       </div>        
      <div className="card-overlay"/>
      </div>
      <Card.Body>
        <Card.Title  className="instructorName">
            <a href="/">Richard Hood </a>
            <div className="instructorStyle">
                <span><i className="bi bi-dot"></i></span>
            </div>            
            </Card.Title>
        <Card.Text className="instructorContent">
            <span> UI UX Designer</span>
            <div className="instructorIcons">
                <span><i className="bi bi-file-earmark"></i>2 Courses</span>
                <span><i className="bi bi-person"></i>0 Students</span>
            </div>            
        </Card.Text>
      </Card.Body>
    </Card>     
      </div>
     </div>
     </div>
     
    </>

  )
}export default Instructors;