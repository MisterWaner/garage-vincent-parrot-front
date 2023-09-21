import { useState, useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Carousel from "nuka-carousel";
import Axios from "../../api/axios";

//Caroussel component to display the testimonials in the home page
const CarousselTestimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviewsDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/reviews/validated");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                setReviews(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        getReviewsDataFromBack();
    }, []);

    return (
        <div className="w-full mx-auto my-10 lg:w-1/2 ">
            <Carousel
                autoplay={true}
                autoplayInterval={3000}
                speed={1500}
                wrapAround={true}
                withoutControls={true}
                slideWidth={"100%"}
                cellAlign="center"
                cellSpacing={10}
                cellAlignHorizontal="center"
                pauseOnHover={true}
            >
                {reviews.map((review) => (
                    <Testimonial key={review.id} review={review} />
                ))}
            </Carousel>
        </div>
    );
};

export default CarousselTestimonials;
