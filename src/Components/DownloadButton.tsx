import '../Styles/DownloadButton.css'

export const DownloadButton = () => {
  return (
    <button>
    <a href={require("../Images/CV.pdf")} download="Krzysztof Snopek CV">Download CV</a></button>
  )
}

