import { Card } from "react-bootstrap";
import Buttons from "./buttons";
function Popularcourse(){
    return(
        <>
        <section className="Popularcourse">
    <div className="title">
       <div className="sec-head">
            <h2>POPULAR COURSES</h2>
     </div>
         <div className="head-title">
            <h2>Choose Our<span> Top Courses</span></h2>
      </div>
    </div>
    <div className="d-flex justify-content-center flex-wrap gap-4 Popularcourse_sec">
     <div className="Courseborder">
    <Card className="custom-card bg-transparent border-0">
      <Card.Body style={{padding:'0'}}>
        <Card.Title>
       <div className="courseHead">
        <h2>Free</h2>
        <h1>$0</h1>
        <span className="month">/Month</span>
        <span className="upgrade">Upgrade as you need</span>
        </div>
        </Card.Title>
        <hr></hr>
        <Card.Text >
            <div className="Courselist">
            <ul className="Coursecontent">
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-calendar4"></i>
                    </div>
                    <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-file-earmark"></i>
                    </div>                    
                     <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-lightbulb"></i>
                    </div>          
                     <span>Learn at your own pace</span>

                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-star"></i>
                    </div>                    
                     <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-card-image"></i>
                    </div>        
                     <span>Learn at your own pace</span>            
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-flag"></i>
                    </div>           
                     <span>Learn at your own pace</span>         
                </li>
            </ul>
            </div>
        </Card.Text>  
         <Buttons className="Coursebutton">Start Now </Buttons>
      </Card.Body>

    </Card>
    </div>

        <div className="Courseborder"> 
    <Card className="custom-card bg-transparent border-0">
      <Card.Body style={{padding:'0'}}>
        <Card.Title>
       <div className="courseHead">
        
        <h2>Saver plan</h2>
        <h1>$29</h1>
        <span className="month">/Month</span>
        <span className="upgrade">$348 Per Year</span>
        </div>
        </Card.Title>
        <hr></hr>
        <Card.Text >
            <div className="Courselist">
            <ul className="Coursecontent">
                <li>
                    <div className="Courses-icons">
                      <i class="bi bi-calendar4"></i>
                    </div>
                    <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-file-earmark"></i>
                    </div>                    
                     <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-lightbulb"></i>
                    </div>          
                     <span>Learn at your own pace</span>

                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-star"></i>
                    </div>                    
                     <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-card-image"></i>
                    </div>        
                     <span>Learn at your own pace</span>            
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-flag"></i>
                    </div>           
                     <span>Learn at your own pace</span>         
                </li>
            </ul>
            </div>
        </Card.Text>
        <Buttons className="Coursebutton">Start Now </Buttons>
      </Card.Body>
    </Card>
    </div>  
        <div className="Courseborder">
    <Card className="custom-card bg-transparent border-0">
      <Card.Body style={{padding:'0'}}>
        <Card.Title>
       <div className="courseHead">
        <h2>Unlimited plan</h2>
        <h1>$49</h1>
        <span className="month">/Month</span>
        <span className="upgrade">$588 Per Year</span>
        </div>
        </Card.Title>
        <hr></hr>
        <Card.Text >
            <div className="Courselist">
            <ul className="Coursecontent">
                <li>
                    <div className="Courses-icons">
                      <i class="bi bi-calendar4"></i>
                    </div>
                    <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                    <i className="bi bi-file-earmark"></i>
                    </div>       
                     <span>Learn at your own pace</span>            
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-lightbulb"></i>
                    </div>          
                     <span>Learn at your own pace</span>

                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-star"></i>
                    </div>                    
                     <span>Learn at your own pace</span>
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-card-image"></i>
                    </div>        
                     <span>Learn at your own pace</span>            
                </li>
                <li>
                    <div className="Courses-icons">
                      <i className="bi bi-flag"></i>
                    </div>           
                     <span>Learn at your own pace</span>         
                </li>
            </ul>
            </div>
        </Card.Text>
        <Buttons className="Coursebutton">Start Now </Buttons>
      </Card.Body>
      
    </Card>
    </div>
    </div>      
    </section>
</>

)} export default Popularcourse;