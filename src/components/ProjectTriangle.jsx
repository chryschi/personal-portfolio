import { useContext, useState } from "react";
import { AppContext } from "../App";

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
    ></div>
  );
};

export default ProjectTriangle;
