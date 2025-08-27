import Buttons from "./buttons";
import Search from "./Search";
import "./stylee.css";
function Homesection({title,className,showButton,buttonText,buttonLink,showContent,showSearch,showhomeCourses,homeCoursesContent,Titlestyle ,sectionId}) {
  return (
    <>
      <section className={`home-sec ${className}`}id={sectionId}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xs-6 home-text">
              <h1  className={`textView ${Titlestyle ? 'effect':''}`} >
                {title || (
                  <>
                    Get smart 
                    <span style={{ textDecoration: "underline" }}>
                       opportunity for
                    </span>
                    your best future
                  </>
                )}
              </h1>
              {showContent && (
                <p>
                  It is a long established fact that reader will be distracted
                  readable content of a page when
                </p>
              )}
              {showButton && (
                <a
                  href={buttonLink || "#"}
                  className="btn btn-primary About_btn"
                >
                  {buttonText || ""}
                </a>
              )}
            </div>
            {showSearch && <Search />}
          </div>
        </div>
      </section>

      {showhomeCourses && (
        <div className="row homeCourses">
          {homeCoursesContent ? (
            homeCoursesContent
          ) : (
            <>
              <div className="col-md-4 text-black p-3">
                <h3>Quality Education</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
                <Buttons className="circleButton">
                  EXPLORE COURSES <i className="bi bi-arrow-right"></i>
                </Buttons>
              </div>
              <div className="col-md-4 text-black p-3 border-start border-end">
                <h3>Experienced Teachers</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
                <Buttons className="circleButton">
                  EXPLORE COURSES <i className="bi bi-arrow-right"></i>
                </Buttons>
              </div>
              <div className="col-md-4 text-black p-3">
                <h3>Delicious Food</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor ut labore.
                </p>
                <Buttons className="circleButton">
                  EXPLORE COURSES <i className="bi bi-arrow-right"></i>
                </Buttons>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Homesection;
