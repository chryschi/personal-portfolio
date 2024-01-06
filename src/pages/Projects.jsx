import "../App.css";
import { useContext } from "react";
import { AppContext } from "../App";

const Projects = () => {
  const { setGrayscale } = useContext(AppContext);

  const showSurrounding = () => {
    setGrayscale(false);
  };

  const pronounceTriangle = () => {
    setGrayscale(true);
  };

  return (
    <>
      <div className="project-triangle-container">
        <div className="project-row row-one">
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-xs position-one triangle-up"
          ></div>
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-small position-two triangle-down"
          ></div>
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-medium position-three triangle-up"
          ></div>
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-small position-four triangle-down"
          ></div>
        </div>
        <div className="project-row row-two">
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-medium position-five triangle-down"
          ></div>
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-small position-six triangle-up"
          ></div>
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-xs position-seven triangle-down"
          ></div>
          <div
            onMouseEnter={pronounceTriangle}
            onMouseLeave={showSurrounding}
            className="triangle-small position-eight triangle-up"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Projects;
