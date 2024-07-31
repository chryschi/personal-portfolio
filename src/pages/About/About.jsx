import "./About.css";
import portrait from "../../assets/projects_screenshots/portrait.jpg";
import { useRef, useEffect, useState } from "react";
import { throttle } from "lodash";

const FadeInSection = ({ children, rootRef }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
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
  const [tooltipTranslate, setTooltipTranslate] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const aboutInfo = [
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
      text: <>Visit my projects on GitHub or contact me here.</>,
      label: "fourth-paragraph",
    },
  ];

  const handleScroll = throttle((e) => {
    // logic for scrolling down
    if (translateY > -960) {
      if (e.deltaY > 0) {
        setIsTransitioning(true);
        setTranslateY((prev) => prev - 320);
      }
    }

    //logic for scrolling up
    if (translateY < 0) {
      if (e.deltaY < 0) {
        setIsTransitioning(true);
        setTranslateY((prev) => prev + 320);
      }
    }
  }, 100);

  const handleScrollbar = throttle((e) => {
    // logic for scrolling down
    if (tooltipTranslate < 300) {
      if (e.deltaY > 0) {
        setTooltipTranslate((prev) => prev + 100);
      }
    }

    //logic for scrolling up
    if (tooltipTranslate > 0) {
      if (e.deltaY < 0) {
        setTooltipTranslate((prev) => prev - 100);
      }
    }
  }, 100);

  return (
    <>
      <div
        onTransitionEnd={() => setIsTransitioning(false)}
        onWheel={
          isTransitioning
            ? null
            : (e) => {
                handleScroll(e);
                handleScrollbar(e);
              }
        }
        className="about-container"
      >
        <div className="about-scrollbar">
          <div
            className="tooltip"
            style={{ transform: `translate3d(0,${tooltipTranslate}%,0)` }}
          ></div>
        </div>

        <div ref={rootRef} className="about-carousel-container">
          <div
            className="item-wrapper"
            style={{ transform: `translate3d(0,${translateY}px,0)` }}
          >
            {aboutInfo.map((info, idx) => (
              <FadeInSection key={idx} rootRef={rootRef}>
                {info.text}
              </FadeInSection>
            ))}
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
