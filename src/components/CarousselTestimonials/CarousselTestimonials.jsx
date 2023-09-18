import { useState, useEffect } from "react";
import Testimonial from "../Testimonial/Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Axios from "../../api/axios";

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
        }

        getReviewsDataFromBack();
    }, []);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: "50px",
        speed: 2000,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToScroll: 1
    }

    return (
        <div className="w-full mx-auto md:w-3/4 ">
            <Slider {...settings} >
                {reviews.map((review) => (

                    <div key={review.id} >
                        <Testimonial review={review} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarousselTestimonials;
