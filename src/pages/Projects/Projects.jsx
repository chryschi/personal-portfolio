import "./Projects.css";
import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import ProjectCard from "../../components/ProjectCard";

import useViewport from "../../components/useViewport";
import { firstRow, secondRow } from "./projectsInfo.jsx";

const Projects = () => {
  const { grayscale } = useContext(AppContext);

  const { width } = useViewport();
  const breakpoint = 1016;

  useEffect(() => {
    document.body.style.backgroundColor = grayscale
      ? "grey"
      : "var(--background-color)";
  }, [grayscale]);

  return (
    <>
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
