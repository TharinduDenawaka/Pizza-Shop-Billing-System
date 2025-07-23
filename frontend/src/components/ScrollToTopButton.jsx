import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 200);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}

export default ScrollToTopButton;
