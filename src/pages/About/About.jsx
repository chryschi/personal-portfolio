import "./About.css";
import portrait from "../../assets/projects_screenshots/portrait.jpg";
import { useRef, useEffect, useState } from "react";

const FadeInSection = ({ children, refFetcher }) => {
  const [isVisible, setVisible] = useState(false);

  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    if (isVisible) {
      refFetcher(domRef);
    }
    return () => observer.disconnect();
  }, [refFetcher, isVisible]);

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
  const [focusedRef, setFocusedRef] = useState(null);

  const handleScroll = () => {
    focusedRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const getRef = (ref) => {
    setFocusedRef(ref);
  };

  return (
    <>
      <div onClick={handleScroll} className="about-container">
        <div className="about-carousel-container">
          <FadeInSection refFetcher={getRef}>
            <p>Hi!</p>
            <p>
              {"I'm Abigail,"} <br />a web developer <br />
              in the making!
            </p>
          </FadeInSection>
          <FadeInSection refFetcher={getRef}>
            I enjoy solving problems, <br />
            producing music and being <br />
            creative in general.
          </FadeInSection>
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
