import { useRef, useEffect, useState } from "react";
import { Link } from "react-scroll";

const navLinks = [
  { path: "aboutme", name: "About" },
  { path: "skills", name: "Skills" },
  { path: "education", name: "Education" },
  { path: "experience", name: "Experience" },
  { path: "projects", name: "Projects" },
  { path: "contactme", name: "Contact" }
];
const Header = () => {
  const [offsetHeight, setOffsetHeight] = useState(0);
  useEffect(() => {
    let clientHeight = window.innerHeight;
    setOffsetHeight(-clientHeight * 0.6);
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
      <ul className="nav-links">
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link
              activeClass=""
              to={navLink.path}
              spy={true}
              smooth={true}
              duration={500}
              offset={index === navLinks.length - 1 ? offsetHeight : -75}
              onClick={toggleNavBar}
            >
              {navLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
