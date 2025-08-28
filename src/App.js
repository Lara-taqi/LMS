import HomePage from './Component/Homepage';
import "./Component/stylee.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Aboutus from './Component/About_us';
import Courses from './Component/Courses';
import Contact from './Component/Contact';
function App() {
  return (
    <>

     <Router>
      <Routes>
        
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/courses" element={<Courses />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>

    
      </>
  );
}

export default App;
