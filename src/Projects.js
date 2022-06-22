import Drawer from "./Drawer.jsx";
import ProjectInfo from "./ProjectInfo.js";
import { useState } from "react";

const projectsList = [
  {
    projectName: "Google home page clone",
    gitHubLink: "https://github.com/Bharathravi1995/google-clone",
    hostLink: "https://csb-tiiwks.netlify.app/",
    details:
      "In this app, google home page with header, footer, search field and search buttons are created. On clicking search or pressing enter, page will be redirected to the google website with the searched keyword.",
    techStack: ["HTML", "CSS", "JS"],
    imgSrc: "./img/google.png",
    gifSrc: "./img/google.gif"
  },
  {
    projectName: "Weather application",
    gitHubLink: "https://github.com/Bharathravi1995/weather-app",
    hostLink: "https://csb-ksx425.netlify.app/",
    details:
      "In this project, an application to view the current weather status of a city is created.",
    techStack: ["HTML", "CSS", "JS", "openweathermap API"],
    imgSrc: "./img/weather.png",
    gifSrc: "./img/weather.gif"
  },
  {
    projectName: "Meal builder",
    gitHubLink: "https://github.com/Bharathravi1995/meal-builder",
    hostLink: "https://csb-kqwwcs.netlify.app/",
    details:
      "In this project, a meal builder application to generate a random meal with it's ingredients and instructions is created.",
    techStack: ["React", "JSX", "CSS", "mealdb API"],
    imgSrc: "./img/mealBuilder.png",
    gifSrc: "./img/mealBuilder.gif"
  },
  {
    projectName: "Todo application",
    gitHubLink: "https://github.com/Bharathravi1995/todo-app",
    hostLink: "https://csb-pwgjyx.netlify.app/",
    details:
      "In this project, a todo builder application to create, update and delete todo is created.",
    techStack: ["React", "JSX", "CSS"],
    imgSrc: "./img/todo.png",
    gifSrc: "./img/todo.gif"
  },
  {
    projectName: "Portfolio",
    gitHubLink: "https://github.com/Bharathravi1995/portfolio",
    hostLink: "https://csb-bw2e62.netlify.app/",
    details:
      "In this project, my portfolio website is created showcasing my skills, education, experience and projects.",
    techStack: ["React", "JS", "CSS"],
    imgSrc: "./img/portfolio.png",
    gifSrc: "./img/portfolio.gif"
  }
];

const Projects = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState();

  return (
    <section className="section" name="projects">
      <div className="container">
        <h3 className="title">Projects</h3>
      </div>
      <div className="projects">
        {projectsList.map((project, index) => {
          return (
            <div className="project-item" key={index}>
              <div className="project-item-img">
                <img src={project.imgSrc} alt={project.projectName} />
                <span
                  className="view-project"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsDrawerOpen(true);
                  }}
                >
                  Read More
                </span>
              </div>
              <span>{project.projectName}</span>
            </div>
          );
        })}
      </div>
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        position="right"
      >
        <ProjectInfo
          project={selectedProject}
          onClose={() => setIsDrawerOpen(false)}
        />
      </Drawer>
    </section>
  );
};

export default Projects;
