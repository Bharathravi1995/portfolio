import { Element } from "react-scroll";

const AboutMe = () => {
  return (
    <section name="aboutme" className="section">
      <div className="container">
        <h3 className="title">About me</h3>
      </div>
      <div className="personal-info">
        <div className="personal-info-content">
          <p className="font-l">
            Hello there, My name is
            <span className="name theme-clr">Bharathwaj Ravi</span>
          </p>
          <p className="font-l">
            I am a <span className="theme-clr">frontend developer</span>
          </p>
          <p>
            I am a Mechanical Engineer by graduation and a software developer by
            profession. My interests towards the software field started during
            my bachelors where I worked on a project which involved coding and
            fuzzy logics to solve real world problems using simulation. I
            enjoyed programming and solving coding challenges, which further
            paved my way towards entering the software field as a professional.{" "}
          </p>
          <p class="animate-left">
            I worked on projects both independently and in teams, cooperating
            with other developers and designers. When dealing with a project I
            pay attention to the smallest details addressing problems with
            patience.
          </p>
          <a href="./cv.pdf" target="_blank" class="btn-default animate-bottom">
            <i class="fa fa-download"></i>Download CV
          </a>
        </div>
        <div className="avatar-img">
          <img src="./img/avatar.jpeg" alt="profile" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
