const Education = () => {
  return (
    <section className="section" name="education">
      <div className="container">
        <h3 className="title">Eduction</h3>
      </div>
      <div className="education">
        <div className="timeline">
          <div className="container left">
            <div className="content">
              <h4>2019 - Present</h4>
              <div className="school-details">
                <span>Master's in Computational Engineering</span>
                <span>Cumulative Grade - 1.7/5.0</span>
                <span>Friedrich-Alexander-Universität, Erlangen, Germanay</span>
              </div>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h4>2012 - 2016</h4>
              <div className="school-details">
                <span>Bachelor's in Mechanical Engineering</span>
                <span>Cumulative Grade - 8.9/10.0</span>
                <span>Sastra University, Thanjavur, India</span>
              </div>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h4>Higher Secondary School</h4>
              <div className="school-details">
                <span>Town Higher Secondary School, Kumbakonam, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
