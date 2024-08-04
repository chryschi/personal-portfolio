import "./Projects.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import ProjectCard from "../../components/ProjectCard";
import imgCVBuilder from "../../assets/projects_screenshots/cv-builder-screenshot.png";
import imgEasyCalc from "../../assets/projects_screenshots/easy-calculator.png";
import imgAdminDashboard from "../../assets/projects_screenshots/admin-dashboard.png";
import useViewport from "../../components/useViewport";

const Projects = () => {
  const { grayscale } = useContext(AppContext);

  const firstRow = [
    {
      classes:
        "triangle-small position-one triangle-up project-triangle small-offset-up",
      squareClasses: "project-square",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
    {
      classes:
        "triangle-small position-two triangle-down project-triangle small-offset-down",
      squareClasses: "project-square",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
    {
      classes:
        "triangle-medium position-three triangle-up project-triangle medium-offset-up",
      squareClasses: "project-square",
      githubUrl: "https://github.com/chryschi/cv-builder ",
      projectUrl: "https://cv-builder-chryschi.netlify.app",
      projectTitle: "CV-Builder",
      imageUrl: imgCVBuilder,
      overlayColor: "rgb(255, 0, 0)",
    },
    {
      classes:
        "triangle-small position-four triangle-down project-triangle small-offset-down",
      squareClasses: "project-square",
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
      squareClasses: "project-square",

      githubUrl: "https://github.com/chryschi/calculator",
      projectUrl: "https://chryschi.github.io/calculator/",
      projectTitle: "",
      imageUrl: imgEasyCalc,
      overlayColor: "rgb(0, 0, 255)",
    },
    {
      classes:
        "triangle-small position-six triangle-up project-triangle small-offset-up",
      squareClasses: "project-square",
      githubUrl: "https://github.com/chryschi/admin-dashboard/",
      projectUrl: "https://chryschi.github.io/admin-dashboard/",
      projectTitle: "",
      imageUrl: imgAdminDashboard,
      overlayColor: null,
    },
    {
      classes:
        "triangle-small position-seven triangle-down project-triangle small-offset-down",
      squareClasses: "project-square",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
    {
      classes:
        "triangle-small position-eight triangle-up project-triangle small-offset-up",
      squareClasses: "project-square",
      githubUrl: "",
      projectUrl: "",
      projectTitle: "",
      imageUrl: "",
      overlayColor: null,
    },
  ];

  const { width } = useViewport();
  const breakpoint = 1016;

  return (
    <>
      {/* <div
        className={"projects-background" + (grayscale ? " grayscale" : "")}
      ></div> */}
      <div
        className={
          width < breakpoint
            ? "project-square-container"
            : "project-triangle-container"
        }
        style={width < breakpoint ? { flexDirection: "column" } : null}
      >
        {firstRow.map((triangle, idx) => (
          <ProjectCard
            key={idx}
            className={
              (width < breakpoint ? triangle.squareClasses : triangle.classes) +
              (grayscale ? " grayscale" : "")
            }
            githubUrl={triangle.githubUrl}
            projectUrl={triangle.projectUrl}
            title={triangle.projectTitle}
            imgUrl={triangle.imageUrl}
            overlayColor={triangle.overlayColor}
          />
        ))}

        {secondRow.map((triangle, idx) => (
          <ProjectCard
            key={firstRow.length + idx}
            className={
              (width < breakpoint ? triangle.squareClasses : triangle.classes) +
              (grayscale ? " grayscale" : "")
            }
            githubUrl={triangle.githubUrl}
            projectUrl={triangle.projectUrl}
            title={triangle.projectTitle}
            imgUrl={triangle.imageUrl}
            overlayColor={triangle.overlayColor}
          />
        ))}
      </div>{" "}
    </>
  );
};

export default Projects;
