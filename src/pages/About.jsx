const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="profile-photo triangle-medium triangle-down"></div>
        <div className="about-triangle-container">
          <div className="about-triangle about-first-triangle triangle-small triangle-down ">
            <div>
              <p>Hi! I&apos;m Abi.</p>
              <p>
                I have a degree in physics <br />
                and a passion for <br />
                music, art and <br /> code.
              </p>
            </div>
          </div>
          {/* <div className="triangle about-position-one small-down"></div> */}
          <div className="about-triangle about-second-triangle triangle-small triangle-up">
            <div>
              During my physics <br />
              studies I came in <br />
              touch with <br />
              programming and
              <br />
              also with web <br /> development
            </div>
          </div>
          <div className="about-triangle about-third-triangle triangle-small triangle-up ">
            <div>
              I love creating and <br />
              building new things <br />
              combined with <br />
              expressing myself <br />
              through colors, <br />
              shapes and <br />
              sound.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
