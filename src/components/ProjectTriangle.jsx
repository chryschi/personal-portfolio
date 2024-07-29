import { useContext, useState } from "react";
import { AppContext } from "../App";
import "./ProjectTriangle.css";

const ProjectTriangle = ({ className }) => {
  const { setGrayscale } = useContext(AppContext);
  const [isHovered, setIsHovered] = useState(false);

  const showSurrounding = () => {
    setGrayscale(false);
    setIsHovered(false);
  };

  const pronounceTriangle = () => {
    setGrayscale(true);
    setIsHovered(true);
  };

  return (
    <div
      onMouseEnter={pronounceTriangle}
      onMouseLeave={showSurrounding}
      className={className + (isHovered ? " remove-grayscale" : "")}
    >
      <div className={isHovered ? "" : "hidden"}>
        <p>project title </p>
        <button>Visit Project</button>
        <button> Code</button>
      </div>
    </div>
  );
};

export default ProjectTriangle;
