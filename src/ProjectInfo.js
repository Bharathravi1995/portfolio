const ProjectInfo = ({
  project: { projectName, gitHubLink, hostLink, details, techStack, imgSrc },
  onClose
}) => {
  return (
    <div className="project-info-container">
      <div className="project-info-header">
        <span className="material-symbols-outlined cursor" onClick={onClose}>
          arrow_back_ios
        </span>
        <span className="cursor" onClick={onClose}>
          Back to project
        </span>
      </div>
      <div className="project-info-content">
        <h3 className="project-info-name">{projectName}</h3>
        <img className="project-info-image" src={imgSrc} alt={projectName} />
        <h4>About</h4>
        <p className="project-info-details">{details} </p>
        <h4>Technologies</h4>
        <p class="d-flex flex-wrap">
          {techStack.map((tech) => (
            <span className="tag">{tech}</span>
          ))}{" "}
        </p>
      </div>
      <div className="project-info-footer">
        <a href={hostLink} rel="noreferrer" target="_blank">
          Demo link <span class="material-symbols-outlined">open_in_new</span>
        </a>
        <a href={gitHubLink} rel="noreferrer" target="_blank">
          Github link <span class="material-symbols-outlined">open_in_new</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectInfo;
