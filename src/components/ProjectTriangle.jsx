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

  // const displayButtons = () => {

  // }

  return (
    <div
      onMouseEnter={pronounceTriangle}
      onMouseLeave={showSurrounding}
      className={className + (isHovered ? " remove-grayscale" : "")}
    >
      <div className={isHovered ? "" : "hidden"}>
        <button>Live Preview</button>
        <button> Code</button>
      </div>
    </div>
  );
};

export default ProjectTriangle;
