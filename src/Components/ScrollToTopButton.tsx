import { useState } from "react";
import { FiChevronsUp } from "react-icons/fi";
import "../Styles/ScrollToTopButton.css";

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  const checkIfScrollTop = (): void => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else if (window.scrollY <= 200) {
      setShowButton(false);
    }
  };

  const scrollTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", checkIfScrollTop);

  return (
    <div>
      {showButton && (
        <FiChevronsUp
          className="to-top-btn to-top-btn-style"
          onClick={scrollTop}
        />
      )}
    </div>
  );
};
