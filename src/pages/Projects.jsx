import "../App.css";

const Projects = () => {
  return (
    <>
      <div className="project-triangle-container">
        <div className="project-row row-one">
          <div className="triangle-xs position-one triangle-up"></div>
          <div className="triangle-small position-two triangle-down"></div>
          <div className="triangle-medium position-three triangle-up"></div>
          <div className="triangle-small position-four triangle-down"></div>
        </div>
        <div className="project-row row-two">
          <div className="triangle-medium position-five triangle-down"></div>
          <div className="triangle-small position-six triangle-up"></div>
          <div className="triangle-xs position-seven triangle-down"></div>
          <div className="triangle-small position-eight triangle-up"></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
