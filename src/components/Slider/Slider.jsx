import { useState } from "react";
import dataSlider from "./dataSlider.js";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
//import {RxDotFilled} from 'react-icons/rx'

const Slider = () => {
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false,
    });

    const prevSlide = () => {
        //Anime le slider vers la gauche au click.
        if (slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({
                index: slideAnim.index - 1,
                inProgress: true,
            });

            //Préviens le spam-click.
            setTimeout(() => {
                setSlideAnim({
                    index: slideAnim.index - 1,
                    inProgress: false,
                });
            }, 400);

            //Permet de revenir au début du slider.
        } else if (slideAnim.index === 1 && !slideAnim.inProgress) {
            setSlideAnim({
                index: dataSlider.length,
                inProgress: true,
            });

            //Préviens le spam-click.
            setTimeout(() => {
                setSlideAnim({
                    index: dataSlider.length,
                    inProgress: false,
                });
            }, 400);
        }
    };

    const nextSlide = () => {
        //Anime le slider vers la droite au click.
        if (slideAnim.index !== dataSlider.length && !slideAnim.inProgress) {
            setSlideAnim({
                index: slideAnim.index + 1,
                inProgress: true,
            });

            //Préviens le spam-click.
            setTimeout(() => {
                setSlideAnim({
                    index: slideAnim.index + 1,
                    inProgress: false,
                });
            }, 400);

            //Permet de revenir au début du slider.
        } else if (
            slideAnim.index === dataSlider.length &&
            !slideAnim.inProgress
        ) {
            setSlideAnim({
                index: 1,
                inProgress: true,
            });

            //Préviens le spam-click.
            setTimeout(() => {
                setSlideAnim({
                    index: 1,
                    inProgress: false,
                });
            }, 400);
        }
    };

    return (
        <div className="max-w-[1400px] h-[500px] md:h-[780px] mx-auto my-10 z-[-1] select-none relative group">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideAnim.index === index + 1 ? "w-full h-full absolute opacity-100 transition-opacity" : "w-full h-full absolute opacity-0 transition-opacity"}
                    >
                        <img src={`/images/image_slider${index + 1}`} alt="" />
                    </div>
                );
            })}
            {/* Left arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] z-auto left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            {/* Right arrow */}
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] z-auto right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight size={30} onClick={nextSlide} />
            </div>
        </div>
    );
};

export default Slider;
