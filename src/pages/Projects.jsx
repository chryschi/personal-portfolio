import "../App.css";
import { useContext } from "react";
import { AppContext } from "../App";
import ProjectTriangle from "../components/ProjectTriangle";

const Projects = () => {
  const { grayscale } = useContext(AppContext);

  const firstRow = [
    "triangle-small position-two triangle-down project-triangle",
    "triangle-medium position-three triangle-up project-triangle",
    "triangle-small position-four triangle-down project-triangle",
  ];

  const secondRow = [
    "triangle-medium position-five triangle-down project-triangle",
    "triangle-small position-six triangle-up project-triangle",
    "triangle-xs position-seven triangle-down project-triangle",
    "triangle-small position-eight triangle-up project-triangle",
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
