import { useEffect } from "react";

import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { reviewSchema } from "../../Validations/reviewValidation.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// eslint-disable-next-line react/prop-types
const ReviewModal = ({ toggleModal }) => {
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

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        reset();
        setTimeout(() => {
            toggleModal();
        }, 1500);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center mt-20 z-50">
            <div className="bg-white p-8 rounded-lg w-3/5 text-black-02 lg:w-1/2">
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
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start "
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="name">Nom</label>
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("name")}
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
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="5"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("message")}
                        />
                        {errors.message ? (
                            <p className="error-msg text-center">
                                {errors.message?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    
                    <div className="flex mb-4 w-full lg:col-start-2">
                        <Button name="Envoyer" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
