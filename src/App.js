import "./css/style.css";

import Navbar from "./sections/navbar.component";
import Header from "./sections/header.component";
import Aboutme from "./sections/aboutMe.component";
import Experience from "./sections/experience.component";
import Freelance from "./sections/freelance.component";
import Work from "./sections/work.component";
import Contact from "./sections/contact.component";
import Footer from "./sections/footer.component";
import Hambargur from "./sections/toggolMenuBar.component";



function App() {
  return (
    <>
    <div className="site-main-wrapper">
      <Hambargur/>
      <Navbar />
      <Header />
      <Aboutme />
      <Experience/>
      <Freelance/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
