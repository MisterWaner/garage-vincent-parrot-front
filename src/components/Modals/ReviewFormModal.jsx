/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { sendReviewDataToBack } from "../../services/sendDataToBack.js";
import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { reviewSchema } from "../../Validations/reviewValidation.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


//Component to send a review to the backend
const ReviewFormModal = ({ toggleModal }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(reviewSchema),
        mode: "onSubmit",
    });

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const onInvalid = (errors) => console.error(errors);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        
        const reviewFormData = new FormData(event.target);
        try {
            const res = await sendReviewDataToBack(reviewFormData);
            const newReview = res.data;
            console.log("data envoyé :", newReview);
            alert("Votre avis a bien été envoyé et sera traité dans les plus brefs délais");
            reset();
            toggleModal();
            console.log(data);
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }

    };

    return (
        <div className="fixed inset-0 overflow-y-scroll flex items-center justify-center z-50 bg-black-02 bg-opacity-50">
            <div className="bg-white min-h-fit mt-auto p-8 rounded-lg w-10/12 md:w-3/5  text-black-02 lg:w-5/6 lg:mt-24">
                <div className="w-full flex justify-end">
                    <button
                        onClick={toggleModal}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>

                <h2 className="text-xl text-center font-bold mb-4">
                    Donnez nous votre avis
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit, onInvalid)}
                    className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-2 lg:items-start "
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="lastname">Nom</label>
                        <input
                            name="lastname"
                            id="lastname"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("lastname")}
                        />
                        {errors.name ? (
                            <p className="error-msg text-center">
                                {errors.name?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="firstname">Prénom</label>
                        <input
                            name="firstname"
                            id="firstname"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("firstname")}
                        />
                        {errors.firstname ? (
                            <p className="error-msg text-center">
                                {errors.firstname?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="email"
                            id="email"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("email")}
                        />
                        {errors.email ? (
                            <p className="error-msg text-center">
                                {errors.email?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="title">Titre</label>
                        <input
                            name="title"
                            id="title"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("title")}
                        />
                        {errors.title ? (
                            <p className="error-msg text-center">
                                {errors.title?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="rating">Note</label>
                        <input
                            name="rating"
                            type="number"
                            id="rating"
                            max={5}
                            min={0}
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("rating")}
                        />
                        {errors.rating ? (
                            <p className="error-msg text-center">
                                {errors.rating?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="comment">Message</label>
                        <textarea
                            name="comment"
                            id="comment"
                            cols="30"
                            rows="5"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("comment")}
                        />
                        {errors.comment ? (
                            <p className="error-msg text-center">
                                {errors.comment?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>

                    <div className="flex mb-4 w-full lg:col-start-2 lg:row-start-4">
                        <Button name="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewFormModal;
