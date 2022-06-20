import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { path: "aboutme", name: "About Me" },
  { path: "skills", name: "Skills" },
  { path: "education", name: "Education" },
  { path: "experience", name: "Experience" },
  { path: "projects", name: "Projects" },
  { path: "contactme", name: "Contact Me" }
];
const Header = () => {
  const [offsetHeight, setOffsetHeight] = useState(0);
  useEffect(() => {
    let clientHeight = window.innerHeight;
    setOffsetHeight(-clientHeight * 0.3);
  }, []);
  const navRef = useRef(),
    toggleNavBar = () => {
      let ref = navRef?.current;
      if (!ref.className.includes("responsive")) {
        ref.className += " responsive";
      } else {
        ref.className = "topnav nav-centre";
      }
    };

  return (
    <nav ref={navRef} className="topnav nav-centre">
      <div className="nav-name-icon">
        <span className="theme-clr">BHARATHWAJ</span>
        <span
          className="material-symbols-outlined hamburger-icon cursor"
          onClick={toggleNavBar}
        >
          menu
        </span>
      </div>
      <ul className="nav-links" onClick={toggleNavBar}>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link
              activeClass="theme-clr"
              to={navLink.path}
              spy={true}
              smooth={true}
              duration={500}
              offset={-75}
            >
              {navLink.name}
            </Link>
          </li>
        ))}

        {/* <li>
          <a href="#skills">Skills</a>
        </li> */}
        {/* <li>
          <Link
            activeClass="theme-clr"
            className="test1"
            to="education"
            spy={true}
            smooth={true}
            duration={500}
          >
            Education
          </Link>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#conatactme">Contact me</a>
        </li> */}
      </ul>
    </nav>
  );
};

export default Header;
