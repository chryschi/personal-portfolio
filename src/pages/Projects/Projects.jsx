import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProjectTriangle from "../../components/ProjectTriangle";

const Projects = () => {
  const { grayscale } = useContext(AppContext);

  const firstRow = [
    "triangle-small position-one triangle-up project-triangle small-offset-up",
    "triangle-small position-two triangle-down project-triangle small-offset-down",
    "triangle-medium position-three triangle-up project-triangle medium-offset-up",
    "triangle-small position-four triangle-down project-triangle small-offset-down",
  ];

  const secondRow = [
    "triangle-medium position-five triangle-down project-triangle medium-offset-down",
    "triangle-small position-six triangle-up project-triangle small-offset-up",
    "triangle-xs position-seven triangle-down project-triangle",
    "triangle-small position-eight triangle-up project-triangle small-offset-up",
  ];

  return (
    <>
      <div
        className={"projects-background" + (grayscale ? " grayscale" : "")}
      ></div>
      <div className="project-triangle-container">
        <div className="project-row row-one">
          {firstRow.map((triangle, idx) => (
            <ProjectTriangle
              key={idx}
              className={triangle + (grayscale ? " grayscale" : "")}
            />
          ))}
        </div>
        <div className="project-row row-two">
          {secondRow.map((triangle, idx) => (
            <ProjectTriangle
              key={firstRow.length + idx}
              className={triangle + (grayscale ? " grayscale" : "")}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
