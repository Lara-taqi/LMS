import Buttons from "./buttons";
import React, { useEffect } from 'react';
import "./stylee.css";
function Topcourses({className,showTitle,showFullcourses}) {
useEffect(() => {
    const cards = document.querySelectorAll('.course-card');
    const observer = new IntersectionObserver(
      (entries) => {
        let delay = 0;
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
            if ((index + 1) % 3 === 0) {
              delay += 400; 
            }
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  return (

    <>
          <section className="courses-section" >
        <div className="Topcours">
         <div className="title">
          <div className="sec-head">
         <h2>POPULAR COURSES</h2>
         </div>
          <div className="head-title">
          <h2>Choose Our<span> Top Courses</span></h2>
         </div>
         </div>

    <div className="container">
    <div className="courses-grid" >
      <div className="course-card">
        <div className="course-left">
          <div className="course-image">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg" alt="Course" />
            <div className="course-price">$265</div>
            <div className="course-details">
              <span><i className="fa fa-file-text"></i> 6 Lessons</span>
              <span><i className="fa fa-clock"></i> 4 Hours</span>
              <span><i className="fa fa-star"></i> 4.5</span>
              <span><i className="fa fa-signal"></i> All Levels</span>
            </div>
          </div>
        </div>
        <div className="course-right">
          <a href="/" class="course-category">Business</a>
          <h3 className="course-title">
            <a href="/">Financial Security Thinking and Principles Theory</a>
          </h3>
        </div>
      </div>
         <div className="course-card">
        <div className="course-left">
          <div className="course-image">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-olia-danilevich-4974912-600x400.jpg" alt="Course" />
            <div className="course-price">$250</div>
            <div className="course-details">
              <span><i className="fa fa-file-text"></i> 15 Lessons</span>
              <span><i className="fa fa-clock"></i> 4 Hours</span>
              <span><i className="fa fa-star"></i> 5.00</span>
              <span><i className="fa fa-signal"></i> All Levels</span>
            </div>
          </div>
        </div>
        <div className="course-right">
          <a href="/" className="course-category">Finance</a>
          <h3 className="course-title">
            <a href="/">Professional Ceramic Moulding For Beginners</a>
          </h3>
        </div>
      </div>
      <div className="course-card">
        <div className="course-left">
          <div className="course-image">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-tiia-pakk-4350767.jpg" alt="Course" />
            <div className="course-price">Free</div>
            <div className="course-details">
              <span><i className="fa fa-file-text"></i> 16 Lessons</span>
              <span><i className="fa fa-clock"></i> 22 hours 30 minutes</span>
              <span><i className="fa fa-star"></i> 5.00</span>
              <span><i className="fa fa-signal"></i> Intermediate</span>
            </div>
          </div>
        </div>
        <div className="course-right">
          <a href="/" className="course-category">UI/UX Design </a>
          <h3 className="course-title">
            <a href="/">Financial Security Thinking and Principles Theory</a>
          </h3>
        </div>
      </div>    
      <div className="course-card">
        <div className="course-left">
          <div className="course-image">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-pixabay-265667.jpg" alt="Course" />
            <div className="course-price">Free</div>
            <div className="course-details">
              <span><i className="fa fa-file-text"></i> 15 Lessons</span>
              <span><i className="fa fa-clock"></i> 7 hours 30 minutes</span>
              <span><i className="fa fa-star"></i> 4.33</span>
              <span><i className="fa fa-signal"></i> Beginner</span>
            </div>
          </div>
        </div>
        <div className="course-right">
          <a href="/" className="course-category">Digital Program</a>
          <h3 className="course-title">
            <a href="/">WordPress For Beginners - Master WordPress</a>
          </h3>
        </div>
      </div>
        <div className="course-card">
        <div className="course-left">
          <div className="course-image">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-christina-morillo-1181359.jpg" alt="Course" />
            <div className="course-price">Free</div>
            <div className="course-details">
              <span><i className="fa fa-file-text"></i> 15 Lessons</span>
              <span><i className="fa fa-clock"></i> 7 hours 30 minutes</span>
              <span><i className="fa fa-star"></i> 4.33</span>
              <span><i className="fa fa-signal"></i> Beginner</span>
            </div>
          </div>
        </div>

       
        <div className="course-right">
          <a href="/" class="course-category">Data Science</a>
          <h3 className="course-title">
            <a href="/">the Complete Python Course For Beginner 2023</a>
          </h3>
        </div>
      </div>
            <div className="course-card">
       
        <div className="course-left">
          <div className="course-image">
            <img src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-caio-56759.jpg" alt="Course" />
            <div className="course-price">$300</div>
            <div className="course-details">
              <span><i className="fa fa-file-text"></i> 14 Lessons</span>
              <span><i className="fa fa-clock"></i> 18 hours 20 minutes</span>
              <span><i className="fa fa-star"></i> 4.00</span>
              <span><i className="fa fa-signal"></i> Intermediate</span>
            </div>
          </div>
        </div>

       
        <div className="course-right">
          <a href="/" className="course-category">UI/UX Design</a>
          <h3 className="course-title">
            <a href="/">Ultimate Photoshop Training: From Beginner</a>
          </h3>
        </div>
      </div>

    </div>
    
      
</div>
<div style={{display:'flex',justifyContent:'center',margin:'50px'}}><Buttons className="Explore_btn"><span>View All Course</span></Buttons></div>
</div>
</section>
</>
  );
}

export default Topcourses;
