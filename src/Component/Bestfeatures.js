import { Card } from "react-bootstrap"
import "./stylee.css";
function BestFeature(){
  return(
<section className="BestFeature">
        <div className="Feature">
        <div className="title">
          <div className="sec-head">
         <h2>WHY CHOOSE EDUSION</h2>
         </div>
          <div className="head-title">
          <h2>Find The  <span>Best Features </span> Of Edusion</h2>
         </div>
         </div>
         </div>
         <div className="Feature-cards">
<div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col-md-4 d-flex">
    <Card className="w-100 border-1 p-4 cardHover" style={{ borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title><div className="sec2-icons">
          <i className="bi bi-book"></i>
          </div>
          </Card.Title>
        <Card.Subtitle className=" mb-2 text-start feature-title">Learn More Anywhere</Card.Subtitle>
        <Card.Text style={{color:'gray',marginTop:'20px',textAlign:'left'}}>
         Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 d-flex">
    <Card className="w-100 border-1 p-4 cardHover" style={{ borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title><div className="sec2-icons">
          <i className="bi bi-heart"></i>
          </div>
          </Card.Title> 
       <Card.Subtitle className="mb-2 text-start feature-title" >Expert Instuctor</Card.Subtitle>
        <Card.Text style={{color:'gray',marginTop:'20px',textAlign:'left',alignItems:'center'}}>
         Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 d-flex">
    <Card className="w-100 border-1 p-4 cardHover" style={{ borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title><div className="sec2-icons">
          <i className="bi bi-person"></i>
          </div>
          </Card.Title>
        <Card.Subtitle className="mb-2 text-start feature-title" >Team Management</Card.Subtitle>
        <Card.Text style={{color:'gray',marginTop:'20px',textAlign:'left'}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 d-flex">
    <Card className="w-100 border-1 p-4 cardHover" style={{ borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title><div className="sec2-icons">
          <i className="bi bi-eye"></i>
          </div>
          </Card.Title>
        <Card.Subtitle className="mb-2 text-start feature-title" >Course Planing</Card.Subtitle>
        <Card.Text style={{color:'gray',marginTop:'50px',textAlign:'left'}}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
        </Card.Text>

      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 d-flex">
    <Card className="w-100 border-1 p-4 cardHover" style={{ borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title><div className="sec2-icons">
          <i className="bi bi-lightbulb"></i>
          </div>
          </Card.Title>
        <Card.Subtitle className="mb-2 text-start feature-title" >Teacher Monitoring </Card.Subtitle>
        <Card.Text style={{color:'gray',marginTop:'20px',textAlign:'left'}}>
         <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
        </p> 
        </Card.Text>
      </Card.Body>
    </Card>
  </div>

  <div className="col-md-4 d-flex">
    <Card className="w-100 border-1 p-4 cardHover" style={{ borderRadius: '12px' }}>
      <Card.Body>
        <Card.Title><div className="sec2-icons">
          <i className="bi bi-envelope"></i>
          </div>
          </Card.Title>
        <Card.Subtitle className="mb-2 text-start feature-title" > 24/7 Strong Support </Card.Subtitle>
        <Card.Text style={{color:'gray',marginTop:'20px',textAlign:'left'}}>
         Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.
        </Card.Text>
      </Card.Body>
    </Card>
  </div>
</div>
         </div>
      </section>
      
   )
   } export default BestFeature;