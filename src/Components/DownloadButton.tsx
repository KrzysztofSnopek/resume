export const DownloadButton = () => {
  return (
    <a
      href={require("../Images/CV.pdf")}
      download="Krzysztof_Snopek_CV.pdf"
      className="block w-full cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-500 to-lime-200 bg-clip-text py-1 text-secondary text-transparent hover:from-lime-200 hover:via-lime-200 hover:to-indigo-700 xl:inline xl:py-4 xl:px-4"
    >
      Download CV
    </a>
  );
};
