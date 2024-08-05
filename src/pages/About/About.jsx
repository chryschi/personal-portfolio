import "./About.css";
import portrait from "../../assets/projects_screenshots/portrait.jpg";
import { useEffect, useState } from "react";
import { throttle } from "lodash";
import { aboutInfo } from "./aboutInfo";
import useViewport from "../../components/useViewport";

const FadeInSection = ({ children, isVisible }) => {
  return (
    <div
      className={`fade-in-section carousel-item ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {children}
    </div>
  );
};

const About = () => {
  const [translateY, setTranslateY] = useState(0);
  const [tooltipTranslate, setTooltipTranslate] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeElementIdx, setActiveElementIdx] = useState(0);

  const ELEMENT_HEIGHT = 320;
  const { width } = useViewport();
  const breakpoint = 1190;

  useEffect(() => {
    setTranslateY(activeElementIdx * -ELEMENT_HEIGHT);
  }, [activeElementIdx]);

  const handleScroll = throttle((e) => {
    // logic for scrolling down
    if (activeElementIdx < 3) {
      if (e.deltaY > 0) {
        setIsTransitioning(true);
        setActiveElementIdx((prev) => prev + 1);
        setTooltipTranslate((prev) => prev + 100);
      }
    }

    //logic for scrolling up
    if (activeElementIdx > 0) {
      if (e.deltaY < 0) {
        setIsTransitioning(true);
        setActiveElementIdx((prev) => prev - 1);
        setTooltipTranslate((prev) => prev - 100);
      }
    }
  }, 100);

  return (
    <>
      <div
        onTransitionEnd={() => setIsTransitioning(false)}
        onWheel={isTransitioning ? null : (e) => handleScroll(e)}
        className={
          "about-container " + (width < breakpoint ? "small-screen" : "")
        }
      >
        <div className="about-scrollbar">
          <div
            className="tooltip"
            style={{ transform: `translate3d(0,${tooltipTranslate}%,0)` }}
          ></div>
        </div>

        <div className="about-carousel-container">
          <div
            className="item-wrapper"
            style={{ transform: `translate3d(0,${translateY}px,0)` }}
          >
            {aboutInfo.map((info, idx) => (
              <FadeInSection
                key={idx}
                isVisible={idx === activeElementIdx ? true : false}
              >
                {info.text}
              </FadeInSection>
            ))}
          </div>
        </div>
        <img src={portrait} className={"profile-photo " + "profile-square"} />
      </div>
    </>
  );
};

export default About;
