import { Container,Row,Col } from "react-bootstrap";
import React, { useEffect, useRef, useState } from 'react';
import "./stylee.css";
function Achievement(){
  const scroll=useRef(null);
  const [played, setplayed]=useState(false);
  useEffect(()=>{
    const record=document.querySelectorAll(".achievbox")
    const start=(Achivenum)=>{
      const final=+Achivenum.dataset.goal;
      let counter= 0;
      const increseNumber=setInterval(()=>{
        counter ++;
        Achivenum.textContent = counter;
        if(counter >= final){
          Achivenum.textContent = final;
          clearInterval(increseNumber);
        }
      },5);
    };
    const onScroll = () => {
      if (scroll.current && window.scrollY >= scroll.current.offsetTop - 300) {
        if (!played) {
          record.forEach((Achivenum) => start(Achivenum));
          setplayed(true);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [played]);    
  
    return(
        <section className="Achievement_sec" ref={scroll}>
            <div className="Achievement">
      <div className="title">
        <div className="sec-head">
         <h2>SOME FUN FACT</h2>
         </div>
         <div className="head-title">
          <h2>Our Great <span>Achievement </span></h2>
         </div>
         </div>

    <Container className="mt-5 AchievementNumber">
      <Row >
       <Col md={3}>
         <div className="achievement-box">
          <i className="bi bi-emoji-smile icon"></i>
           <div>
           <div className="achievbox" data-goal="854">0</div>
           <span className="label">Enrolled Students</span>
           </div>
         </div>
        </Col>
       <Col md={3}>
         <div className="achievement-box">
          <i style={{color:"#EE6C20"}} className="bi bi-files icon"></i>
           <div>
           <div className="achievbox" data-goal="521">0</div>
           <span className="label">Enrolled Students</span>
           </div>
         </div>
        </Col>
       <Col md={3}>
         <div className="achievement-box">
          <i style={{color:"#15BE56"}} className="bi bi-headset icon"></i>
           <div>
           <div className="achievbox" data-goal="163">0</div>
           <span className="label">Enrolled Students</span>
           </div>
         </div>
        </Col>
       <Col md={3}>
         <div className="achievement-box">
          <i style={{color:" #BB0852"}} className="bi bi-person icon"></i>
           <div>
           <div className="achievbox" data-goal="93">0</div>
           <span className="label">Enrolled Students</span>
           </div>
         </div>
        </Col>
      </Row>
    </Container>
    </div>
      </section>
    )
}export default Achievement;