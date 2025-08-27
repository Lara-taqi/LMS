import "./stylee.css";
import Navegation from "./Navbar";
import Trustedcompany from "./image-scroll";
import Topcourses from "./Topcourses";
import Footer from "./Footer";
import Latestblog from "./Latest-Blogs";
import Topicstolearn from "./Topicstolearn";
import Platform from "./Platform";
import Subscribe from "./Subscribe";
import Achievement from "./Achievement";
import VideoSection from "./Videosection";
import Skills from "./Skills";
import Homesection from "./Homesection";
import Popularcourse from "./Popularcourses";
import { useEffect, useState } from "react";
import Buttons from "./buttons";

function HomePage() {
  const [loading, setLoading] = useState(true);
  const [Titlestyle, setTitlestyle] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTitlestyle(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src="/spinner-multiple-2.svg"
          alt="load"
          style={{ width: "100px" }}
        />
      </div>
    );
  }

  return (
    <>
      <Navegation showSecondheader={true} />
      <Homesection
        title={
          <>
            Get smart{" "}
            <span style={{ textDecoration: "underline" }}>
              opportunity for
            </span>{" "}
            your best future
          </>
        }
        showContent={true}
        showSearch={true}
        showhomeCourses={true}
        Titlestyle={Titlestyle}
      />
      <Topicstolearn />
      <Skills />
      <Topcourses />
      <Achievement />
      <VideoSection />
      <Trustedcompany />
      <Platform />
      <Popularcourse />
      <Subscribe />
      <Latestblog />
      <Footer />
      <Buttons className='travelbutton'><a href="#homeSection"><i className="bi bi-chevron-up"></i></a></Buttons>
    </>
  );
}

export default HomePage;
