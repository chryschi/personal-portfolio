import "./About.css";
import portrait from "../../assets/projects_screenshots/portrait.jpg";
import { useRef, useEffect, useState } from "react";

const FadeInSection = ({ children, rootRef }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry);

          setVisible(entry.isIntersecting);
        });
      },
      { root: rootRef.current }
    );
    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, [isVisible, rootRef]);

  return (
    <div
      className={`fade-in-section carousel-item ${
        isVisible ? "is-visible" : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const About = () => {
  const rootRef = useRef(null);
  const [translateY, setTranslateY] = useState(0);

  const scrollDown = () => {
    console.log(translateY);
    if (translateY !== -960) {
      setTranslateY((prev) => prev - 320);
    }
  };

  return (
    <>
      <div onClick={scrollDown} className="about-container">
        <div ref={rootRef} className="about-carousel-container">
          <div
            className="item-wrapper"
            style={{ transform: `translate3d(0,${translateY}px,0)` }}
          >
            <FadeInSection rootRef={rootRef}>
              <p>Hi!</p>
              <p>
                {"I'm Abigail,"} <br />a web developer <br />
                in the making!
              </p>
            </FadeInSection>
            <FadeInSection rootRef={rootRef}>
              I enjoy solving problems, <br />
              producing music and being <br />
              creative in general.
            </FadeInSection>
            <FadeInSection rootRef={rootRef}>3rd section</FadeInSection>
            <FadeInSection rootRef={rootRef}>4th section</FadeInSection>
          </div>
        </div>
        <img
          src={portrait}
          className="profile-photo triangle-medium triangle-down"
        />
      </div>
    </>
  );
};

export default About;
