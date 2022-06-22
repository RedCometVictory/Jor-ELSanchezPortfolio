import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showButton, isShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        isShowButton(true);
      } else {
        isShowButton(false);
      };
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  };

  return (
    <>
      {showButton && (
        <div className="scroll" onClick={scrollToTop}>
          <FaChevronUp/>
        </div>
      )}
    </>
  )
}
export default ScrollToTop;