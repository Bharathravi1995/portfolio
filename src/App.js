import "./styles.css";
import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Skills from "./Skills.js";
import Education from "./Education.js";
import Exeperience from "./Experience.js";
import Projects from "./Projects.js";
import ContactMe from "./ContactMe.js";
import SocialProfiles from "./SocialProfiles.js";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <Header />
        </header>
        <main id="main-container">
          <AboutMe />
          <Skills />
          <Education />
          <Exeperience />
          <Projects />
          <ContactMe />
        </main>
        <SocialProfiles />
        <footer>
          <small>
            Made with <span>❤</span> by{" "}
            <a href="https://csb-em0wuy.netlify.app/" target="_blank">
              Bharathwaj Ravi
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
