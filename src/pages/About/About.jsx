import "./About.css";
import portrait from "../../assets/projects_screenshots/portrait.jpg";

const About = () => {
  // const aboutMeInfo = [

  // ]

  return (
    <>
      <div className="about-container">
        <img
          src={portrait}
          className="profile-photo triangle-medium triangle-down"
        />
      </div>
    </>
  );
};

export default About;
