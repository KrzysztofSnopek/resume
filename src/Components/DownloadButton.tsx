import "../Styles/DownloadButton.css";

export const DownloadButton = () => {
  return (
    <a
      href={require("../Images/CV.pdf")}
      download="Krzysztof Snopek CV"
      className="nav-btn"
    >
      Download CV
    </a>
  );
};
