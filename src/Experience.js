const Exeperience = () => {
  return (
    <section className="section" name="experience">
      <div className="container">
        <h3 className="title">Exeperience</h3>
        <div className="experience">
          <div className="experience-item">
            <h3>Master thesis student</h3>
            <div className="title">
              <h4>QDAcity, Erlangen, Germany</h4>
              <h4>2019 - 2020</h4>
            </div>
            <p class="job-description">
              Architected and developed Role-Based Access Control (RBAC) in
              QDAcity using Java, Google App Engine and React JS. Implemented
              member management module using RBAC in both the frontend and
              backend. Implemented access control module in frontend and backend
              to allow or deny user requests on a resource based on the user’s
              role permission. Handled unit tests for the backend APIs.
            </p>
            <span className="tag">React</span>
            <span className="tag">Styled components</span>
            <span className="tag">Java</span>
            <span className="tag">GCP</span>
            <span className="tag">Jest</span>
          </div>
          <div className="experience-item">
            <h3>Werkstudent</h3>
            <div className="title">
              <h4>Siemens Healthineers, Erlangen, Germany</h4>
              <h4>October 2020 - Aprl 2022</h4>
            </div>
            <p>
              Developed a tool to download installation files of medical
              equipment-related software using React JS. Worked with azure
              technologies for storage and retrieval of files. Used CDN to cache
              the files for a faster download experience.
            </p>
            <span className="tag">React JS</span>
            <span className="tag">CSS</span>
            <span className="tag">Material UI</span>
            <span className="tag">Azure</span>
          </div>

          <div className="experience-item">
            <h3>Member of Technical Staff</h3>
            <div className="title">
              <h4>Zoho, Chennai, India.</h4>
              <h4>Novermber 2016 - June 2019</h4>
            </div>
            <p>
              Worked as a frontend developer in Zoho WorkDrive a cloud-based
              document management service application using Ember JS. Served as
              a single point of contact for the Backend, design and product
              management teams. Implemented some important functionalities like
              upload and download of files and folders. Contributed towards
              reducing the asset size. Handled network requests and assisted in
              offline first development using service workers.
            </p>
            <span className="tag">Ember JS</span>
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exeperience;
