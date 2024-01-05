import "../App.css";

const Projects = () => {
  return (
    <>
      <div className="project-triangle-container">
        <div className="project-row row-one">
          <div className="triangle position-one xs-up"></div>
          <div className="triangle position-two small-down"></div>
          <div className="triangle position-three medium-up"></div>
          <div className="triangle position-four small-down"></div>
        </div>
        <div className="project-row row-two">
          <div className="triangle position-five medium-down"></div>
          <div className="triangle position-six small-up"></div>
          <div className="triangle position-seven xs-down"></div>
          <div className="triangle position-eight small-up"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
