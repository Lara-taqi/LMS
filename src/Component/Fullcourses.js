import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState, useMemo } from 'react';
import { Pagination, Container } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./stylee.css";

function FullCourses() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [option, setOption] = useState("Release Date (newest first)");
  const select = (eventKey) => {
    setOption(eventKey);
  };

  const sortedCourses = useMemo(() => {
    const courses = [
      {
        id: 1,
        title: "Financial Security Thinking And Principles Theory",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                Business
              </Button>
              <Card.Text className="CourseName">
                <a href="/">Financial Security Thinking And Principles Theory</a>
              </Card.Text>
              <div className="course-price">$265</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 6 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 4 Hours
                </span>
                <span>
                  <i className="fa fa-star"></i> 4.5
                </span>
                <span>
                  <i className="fa fa-signal"></i> All Levels
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 2,
        title: "Professional Ceramic Moulding For Beginners",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-olia-danilevich-4974912-600x400.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                Finance
              </Button>
              <Card.Text className="CourseName">
                <a href="/">Professional Ceramic Moulding For Beginners</a>
              </Card.Text>
              <div className="course-price">$250</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 15 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 4 Hours
                </span>
                <span>
                  <i className="fa fa-star"></i> 5.00
                </span>
                <span>
                  <i className="fa fa-signal"></i> All Levels
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 3,
        title: "Basic Fundamentals Of Interior & Graphics Design",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-tiia-pakk-4350767.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                UI-UX Design
              </Button>
              <Card.Text className="CourseName">
                <a href="/">Basic Fundamentals Of Interior & Graphics Design</a>
              </Card.Text>
              <div className="course-price">Free</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 16 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 22 hours 30 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 5.00
                </span>
                <span>
                  <i className="fa fa-signal"></i> Intermediate
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 4,
        title: "WordPress For Beginners - Master WordPress",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-pixabay-265667.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                Digital programming
              </Button>
              <Card.Text className="CourseName">
                <a href="/">WordPress For Beginners - Master WordPress</a>
              </Card.Text>
              <div className="course-price">Free</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 15 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 7 hours 30 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 4.33
                </span>
                <span>
                  <i className="fa fa-signal"></i> Beginner
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 5,
        title: "The Complete Python Course For Beginner 2023",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-christina-morillo-1181359.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                Data Science
              </Button>
              <Card.Text className="CourseName">
                <a href="/">The Complete Python Course For Beginner 2023</a>
              </Card.Text>
              <div className="course-price">$300</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 14 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 18 hours 20 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 4.00
                </span>
                <span>
                  <i className="fa fa-signal"></i> Intermediate
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 6,
        title: "Ultimate Photoshop Training: From Beginner",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-caio-56759.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                UI/UX Design
              </Button>
              <Card.Text className="CourseName">
                <a href="/">Ultimate Photoshop Training: From Beginner</a>
              </Card.Text>
              <div className="course-price">Free</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 14 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 13 hours 20 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 3.33
                </span>
                <span>
                  <i className="fa fa-signal"></i> All Levels
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 7,
        title: "User Experience Design Essentials Adobe Xd UI UX Design",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-eugene-capon-1261823.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                Modern Physics
              </Button>
              <Card.Text className="CourseName">
                <a href="/">User Experience Design Essentials Adobe Xd UI UX Design</a>
              </Card.Text>
              <div className="course-price">Free</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 15 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 10 hours 40 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 4.50
                </span>
                <span>
                  <i className="fa fa-signal"></i> Beginner
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 8,
        title: "Basic Fundamentals Of Interior & Graphics Design",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-josh-sorenson-1714202.jpg"
            />
            <Card.Body>
              <Button
                variant="success"
                style={{ backgroundColor: '#2eca7f', border: 'none' }}
              >
                Modern Physics
              </Button>
              <Card.Text className="CourseName">
                <a href="/">Basic Fundamentals Of Interior & Graphics Design</a>
              </Card.Text>
              <div className="course-price">$180</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 16 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 15 hours 20 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 5.00
                </span>
                <span>
                  <i className="fa fa-signal"></i> Beginner
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
      {
        id: 9,
        title: "Sales Training: Practical Sales Techniques",
        component: (
          <Card className="course-card2">
            <Card.Img
              variant="top"
              src="https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-mikael-blomkvist-6476595.jpg"
            />
            <Card.Body>
              <div style={{ display: 'flex', gap: '20px' }}>
                <Button
                  variant="success"
                  style={{ backgroundColor: '#2eca7f', border: 'none' }}
                >
                  Go somewhere
                </Button>
                <Button
                  variant="success"
                  style={{ backgroundColor: '#2eca7f', border: 'none' }}
                >
                  Go somewhere
                </Button>
              </div>
              <Card.Text className="CourseName">
                <a href="/">Sales Training: Practical Sales Techniques</a>
              </Card.Text>
              <div className="course-price">Free</div>
              <div className="courseDetails">
                <span>
                  <i className="fa fa-file-text"></i> 14 Lessons
                </span>
                <span>
                  <i className="fa fa-clock"></i> 2 hours 20 minutes
                </span>
                <span>
                  <i className="fa fa-star"></i> 4.00
                </span>
                <span>
                  <i className="fa fa-signal"></i> Expert
                </span>
              </div>
            </Card.Body>
          </Card>
        ),
      },
    ];
    switch (option) {
      case "Course Title (a-z)":
        return [...courses].sort((a, b) => a.title.localeCompare(b.title));
      case "Course Title (z-a)":
        return [...courses].sort((a, b) => b.title.localeCompare(a.title));
      case "Release Date(Oldest first)":
        return [...courses].sort((a, b) => a.id - b.id);
      case "Release Date (newest first)":
      default:
        return [...courses].sort((a, b) => b.id - a.id);
    }
  }, [option]);

  return (
    <>
      <div className="Sortstyle">
        <DropdownButton
          id="dropdown-basic-button"
          className="Sortcourses"
          title={option}
          onSelect={select}
        >
          <Dropdown.Item eventKey="Release Date (newest first)">
            Release Date (newest first)"
          </Dropdown.Item>
          <Dropdown.Item eventKey="Release Date(Oldest first)">
            Release Date(Oldest first)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Course Title (a-z)">
            Course Title (a-z)
          </Dropdown.Item>
          <Dropdown.Item eventKey="Course Title (z-a)">
            Course Title (z-a)
          </Dropdown.Item>
        </DropdownButton>
      </div>

      <div className="courses-grid2">
        {sortedCourses[0]?.component}
        {sortedCourses[1]?.component}
        {sortedCourses[2]?.component}
        {sortedCourses[3]?.component}
        {sortedCourses[4]?.component}
        {sortedCourses[5]?.component}
        {sortedCourses[6]?.component}
        {sortedCourses[7]?.component}
        {sortedCourses[8]?.component}
      </div>

      <Container
        className="d-flex justify-content-between align-items-center border p-1 rounded"
        style={{ maxWidth: '80%', marginTop: '5px', marginBottom: '50px' }}
      >
        <span style={{ fontSize: '16px' }}>
          Page {currentPage} of {totalPages}
        </span>
        <div className="d-flex align-items-center gap-3 custom-pagination">
          <Pagination className="mb-0">
            <Pagination.Item
              active={currentPage === 1}
              onClick={() => handlePageChange(1)}
            >
              1
            </Pagination.Item>
            <Pagination.Item
              active={currentPage === 2}
              onClick={() => handlePageChange(2)}
            >
              2
            </Pagination.Item>
          </Pagination>
        </div>
      </Container>
    </>
  );
}

export default FullCourses;
