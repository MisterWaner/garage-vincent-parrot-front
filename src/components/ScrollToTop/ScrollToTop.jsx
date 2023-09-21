import { useState, useEffect } from "react";
import { FaCircleArrowUp } from "react-icons/fa6";

//Component to scroll to the top of the page
const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {showButton && (
                <button
                    className="fixed bottom-4 right-4 text-yellow-02 border border-solid border-red-02 bg-red-02 rounded-full z-50"
                    onClick={scrollToTop}
                >
                    <FaCircleArrowUp className="w-full h-full" size={30} />
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
