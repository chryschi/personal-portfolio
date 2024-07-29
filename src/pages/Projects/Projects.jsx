import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProjectTriangle from "../../components/ProjectTriangle";

const Projects = () => {
  const { grayscale } = useContext(AppContext);

  const firstRow = [
    {
      classes:
        "triangle-small position-one triangle-up project-triangle small-offset-up",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
    {
      classes:
        "triangle-small position-two triangle-down project-triangle small-offset-down",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
    {
      classes:
        "triangle-medium position-three triangle-up project-triangle medium-offset-up",
      githubUrl: "https://cv-builder-chryschi.netlify.app ",
      projectUrl: "https://github.com/chryschi/cv-builder",
      projectTitle: "CV-Builder",
    },
    {
      classes:
        "triangle-small position-four triangle-down project-triangle small-offset-down",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
  ];

  const secondRow = [
    {
      classes:
        "triangle-medium position-five triangle-down project-triangle medium-offset-down",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
    {
      classes:
        "triangle-small position-six triangle-up project-triangle small-offset-up",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
    {
      classes: "triangle-xs position-seven triangle-down project-triangle",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
    {
      classes:
        "triangle-small position-eight triangle-up project-triangle small-offset-up",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
    },
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
              className={triangle.classes + (grayscale ? " grayscale" : "")}
              githubUrl={triangle.githubUrl}
              projectUrl={triangle.projectUrl}
            />
          ))}
        </div>
        <div className="project-row row-two">
          {secondRow.map((triangle, idx) => (
            <ProjectTriangle
              key={firstRow.length + idx}
              className={triangle.classes + (grayscale ? " grayscale" : "")}
              githubUrl={triangle.githubUrl}
              projectUrl={triangle.projectUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
