import { Link } from "react-router-dom";

export const aboutInfo = [
  {
    text: (
      <>
        <p>Hi!</p>
        <p>
          {"I'm Abigail,"} <br />a self-taught web developer <br /> based in
          Augsburg, Germany.
          <br />
        </p>
      </>
    ),
    label: "first-paragraph",
  },
  {
    text: (
      <>
        I enjoy solving problems, <br />
        producing music <br />
        and being creative in general.
      </>
    ),
    label: "second-paragraph",
  },
  {
    text: (
      <>
        Studying physics guided me to coding. <br />
        Eventually a passion for building appealing web projects from scratch
        evolved from that.
      </>
    ),
    label: "third-paragraph",
  },
  {
    text: (
      <>
        Visit my projects on{" "}
        <Link target={"_blank"} to="https://github.com/chryschi">
          GitHub{" "}
        </Link>
        or contact me
        <Link to="/contact">here.</Link>
      </>
    ),
    label: "fourth-paragraph",
  },
];
