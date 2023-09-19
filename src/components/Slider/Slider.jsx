import Carousel from "nuka-carousel";
import dataSlider from "./dataSlider.js";

//Carousel from Nuka-carousel
const Slider = () => {
    return (
        <>
            <Carousel
                autoplay
                autoplayInterval={6000}
                wrapAround={true}
                withoutControls={true}
                slideWidth={"100%"}
                cellAlign="center"
                cellSpacing={10}
                cellAlignHorizontal="center"
                speed={3000}
                className="my-10"
            >
                {dataSlider.map((obj, index) => (
                    <div key={obj.id}>
                        <img
                            src={`/images/image_slider${index + 1}.jpg`}
                            alt=""
                            className="w-full max-w-full max-h-full mx-auto"
                        />
                    </div>
                ))}
            </Carousel>
        </>
    );
};

export default Slider;
