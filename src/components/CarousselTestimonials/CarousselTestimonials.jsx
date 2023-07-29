import { useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Glide from "@glidejs/glide";

const CarousselTestimonials = () => {
    useEffect(() => {
        const slider = new Glide(".glide-08", {
            type: "carousel",
            focusAt: "center",
            animationDuration: 4000,
            autoplay: 3000,
            rewind: true,
            perView: 2,
            gap: 20,
            classes: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },
            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        }).mount();

        return () => {
            slider.destroy();
        };
    }, []);

    return (
        <>
            {/*<!-- Component: Testimonial carousel --> */}
            <div className="glide-08 relative w-full">
                {/*    <!-- Slides --> */}
                <div data-glide-el="track" className="overflow-hidden">
                    <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0 pb-12">
                        <li>
                            <div className="h-full w-full">
                                <Testimonial />
                            </div>
                        </li>
                        <li>
                            <div className="h-full w-full">
                                <Testimonial />
                            </div>
                        </li>
                        <li>
                            <div className="h-full w-full">
                                <Testimonial />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/*<!-- End Testimonial carousel --> */}
        </>
    );
};

export default CarousselTestimonials;
