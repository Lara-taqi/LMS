import Card from 'react-bootstrap/Card';
import "./stylee.css";
import Buttons from './buttons';

function Latestblog() {
  return (
    <>
    <section className='Blog'>
      <div className='center'>
        <div className="title">
        <div className="sec-head">
         <h2>NEWS </h2>
         </div>
         <div className="head-title">
          <h2>Our Latest <span> Blogs </span></h2>
         </div>
         </div>

<div className="mainBlog">
  <div className="leftColumn">
    <div className='div_blog_1'>
      <span>Jun 01, 2024 |</span>
      <a href='/' style={{textDecoration:'none' ,color:'#2eca7f'}}>Technology</a>
      <h4 className='Bloglink'><a href='/'>Professional Mobile Painting and Sculpting</a></h4>
      <Buttons className="circleButton">READ MORE <i className="bi bi-arrow-right"></i></Buttons>
    </div>

    <div className='div_blog_2'>
      <span>May 29, 2024 |</span>
      <a href='/' style={{textDecoration:'none' ,color:'#2eca7f'}}>Programming</a>
      <h4 className='Bloglink'> <a href='/'>Professional Ceramic Moulding for Beginner</a></h4>
      <Buttons className="circleButton">READ MORE <i className="bi bi-arrow-right"></i></Buttons>
    </div>
  </div>

  <div className="rightColumn blogCards">
    <Card >
      <Card.Img variant="top" src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-thisisengineering-3862132-370x260.jpg" />
      <Card.Body>
        <Card.Title className='cardLink'><span>Jun 01, 2024 |</span><a href='/'>Technology</a></Card.Title>
        <Card.Text className='cardTitle'><a href='/' >Professional Mobile Painting and Sculpting</a></Card.Text>
        <Buttons className="circleButton">READ MORE <i className="bi bi-arrow-right"></i></Buttons>
      </Card.Body>
    </Card>

    <Card className="">
      <Card.Img variant="top" src="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/pexels-thisisengineering-3861972-370x260.jpg" />
      <Card.Body>
        <Card.Title className='cardLink'><span>May 29, 2024 |</span><a href='/'>Programming</a></Card.Title>
        <Card.Text className='cardTitle'> <a href='/'  >Professional Ceramic Moulding for Beginner</a></Card.Text>
        <Buttons className="circleButton">READ MORE <i className="bi bi-arrow-right"></i></Buttons>
      </Card.Body>
    </Card>
  </div>
</div>
</div>

</section>
</>
  );
}

export default Latestblog;