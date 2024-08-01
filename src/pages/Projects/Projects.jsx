import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProjectTriangle from "../../components/ProjectTriangle";
import imgCVBuilder from "../../assets/projects_screenshots/cv-builder-screenshot.png";
import imgEasyCalc from "../../assets/projects_screenshots/easy-calculator.png";
import imgAdminDashboard from "../../assets/projects_screenshots/admin-dashboard.png";

const Projects = () => {
  const { grayscale } = useContext(AppContext);

  const firstRow = [
    {
      classes:
        "triangle-small position-one triangle-up project-triangle small-offset-up",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
    {
      classes:
        "triangle-small position-two triangle-down project-triangle small-offset-down",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
    {
      classes:
        "triangle-medium position-three triangle-up project-triangle medium-offset-up",
      githubUrl: "https://github.com/chryschi/cv-builder ",
      projectUrl: "https://cv-builder-chryschi.netlify.app",
      projectTitle: "CV-Builder",
      imageUrl: imgCVBuilder,
      overlayColor: "rgb(255, 0, 0)",
    },
    {
      classes:
        "triangle-small position-four triangle-down project-triangle small-offset-down",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
  ];

  const secondRow = [
    {
      classes:
        "triangle-medium position-five triangle-down project-triangle medium-offset-down",
      githubUrl: "https://github.com/chryschi/calculator",
      projectUrl: "https://chryschi.github.io/calculator/",
      projectTitle: "",
      imageUrl: imgEasyCalc,
      overlayColor: "rgb(0, 0, 255)",
    },
    {
      classes:
        "triangle-small position-six triangle-up project-triangle small-offset-up",
      githubUrl: "https://github.com/chryschi/admin-dashboard/",
      projectUrl: "https://chryschi.github.io/admin-dashboard/",
      projectTitle: "",
      imageUrl: imgAdminDashboard,
      overlayColor: null,
    },
    {
      classes: "triangle-small position-seven triangle-down project-triangle",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
    {
      classes:
        "triangle-small position-eight triangle-up project-triangle small-offset-up",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
  ];

  return (
    <>
      {/* <div
        className={"projects-background" + (grayscale ? " grayscale" : "")}
      ></div> */}
      <div className="project-triangle-container">
        {/* <div className="project-row"> */}

        {firstRow.map((triangle, idx) => (
          <ProjectTriangle
            key={idx}
            className={triangle.classes + (grayscale ? " grayscale" : "")}
            githubUrl={triangle.githubUrl}
            projectUrl={triangle.projectUrl}
            title={triangle.projectTitle}
            imgUrl={triangle.imageUrl}
            overlayColor={triangle.overlayColor}
          />
        ))}
        {/* </div> */}
        {/* <div className="project-row"> */}
        {secondRow.map((triangle, idx) => (
          <ProjectTriangle
            key={firstRow.length + idx}
            className={triangle.classes + (grayscale ? " grayscale" : "")}
            githubUrl={triangle.githubUrl}
            projectUrl={triangle.projectUrl}
            title={triangle.projectTitle}
            imgUrl={triangle.imageUrl}
            overlayColor={triangle.overlayColor}
          />
        ))}
        {/* </div> */}
      </div>{" "}
    </>
  );
};

export default Projects;
