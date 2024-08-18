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

export default FadeInSection;
