import Drawer from "./Drawer.jsx";
import ProjectInfo from "./ProjectInfo.js";
import { useState } from "react";

const projectsList = [
  {
    projectName: "A new Project",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["React", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project 2",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["Angular", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["React", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project 2",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["Angular", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["React", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project 2",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["Angular", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["React", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project 2",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["Angular", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
  },
  {
    projectName: "A new Project",
    gitHubLink: "https://www.npmjs.com/package/react-scroll",
    hostLink: "https://www.npmjs.com/package/react-scroll",
    details:
      "Piggment is curated collection of amazingly colored gradients fordesigners, developers and smart creators over the world. now you cangenerate, explore, save, easy CSS crossbrowser gradient codes all inone place.",
    techStack: ["React", "JS", "CSS"],
    imgSrc: "https://i.ibb.co/tCZFDhL/Screen-Recording-2020-06-11-at-1.gif"
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
                  class="view-project"
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
