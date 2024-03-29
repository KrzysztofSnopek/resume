import { useRef, useState } from "react";
import { About } from "./About";
import { Works } from "./Works";
import { Contact } from "./Contact";
import { Home } from "./Home";
import { ScrollToTopButton } from "./ScrollToTopButton";
import { DownloadButton } from "./DownloadButton";
import { GiHamburgerMenu } from "react-icons/gi";

export function TopNavbar() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);
  const [buttonClass, setButtonClass] = useState(true);

  function handleClick() {
    setButtonClass((buttonClass) => !buttonClass);
  }

  let toggleNavVisibility = buttonClass ? "hidden" : "";

  const scrollToComponent = (compRef: any) => {
    if (buttonClass === false) {
      window.scrollTo({
        top: compRef.current.offsetTop - 375,
        behavior: "smooth",
      });
      setButtonClass(true);
    } else {
      window.scrollTo({
        top: compRef.current.offsetTop - 105,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <ScrollToTopButton />

      <nav className="sticky top-0 z-10 flex flex-col items-start justify-between bg-gradient-to-b from-navTop via-navMid to-navBot p-8 font-fredoka text-4xl font-bold xl:flex-row">
        <div className="self-start">
          <a
            href="#"
            className="bg-gradient-to-r from-indigo-400 via-blue-600 to-lime-300 bg-clip-text text-transparent sm:text-transparent"
          >
            Krzysztof Snopek
          </a>
        </div>

        <a
          className="absolute top-8 right-16 h-4 w-2 cursor-pointer text-lime-200 xl:hidden xl:justify-between"
          onClick={handleClick}
        >
          <GiHamburgerMenu />
        </a>

        <div
          className={`${toggleNavVisibility} w-full self-center xl:flex xl:w-auto`}
        >
          <ul className="flex w-full flex-col pt-8 text-center xl:w-auto xl:flex-row xl:pt-0">
            <li>
              <a
                className="block w-full cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-500 to-lime-200 bg-clip-text py-1 text-secondary text-transparent hover:from-lime-200 hover:via-lime-200 hover:to-indigo-700 xl:inline xl:w-auto xl:py-4 xl:px-4"
                onClick={() => scrollToComponent(homeRef)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="block cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-500 to-lime-200 bg-clip-text py-1 text-secondary text-transparent hover:from-lime-200 hover:via-lime-200 hover:to-indigo-700 xl:inline xl:py-4 xl:px-4"
                onClick={() => scrollToComponent(aboutRef)}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-500 to-lime-200 bg-clip-text py-1 text-secondary text-transparent hover:from-lime-200 hover:via-lime-200 hover:to-indigo-700 xl:inline xl:py-4 xl:px-4"
                onClick={() => scrollToComponent(worksRef)}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="block cursor-pointer bg-gradient-to-r from-indigo-400 via-blue-500 to-lime-200 bg-clip-text py-1 text-secondary text-transparent hover:from-lime-200 hover:via-lime-200 hover:to-indigo-700 xl:inline xl:py-4 xl:px-4"
                onClick={() => scrollToComponent(contactRef)}
              >
                Contact
              </a>
            </li>
            <li className="w-full xl:w-auto">
              <DownloadButton />
            </li>
          </ul>
        </div>
      </nav>

      <div className="page-content">
        <div ref={homeRef}>
          <Home />
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={worksRef}>
          <Works />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </div>
  );
}
