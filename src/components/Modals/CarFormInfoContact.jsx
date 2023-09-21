/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Button from "../Button/Button.jsx";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { askForCarSchema } from "../../Validations/askForCarValidation.js";

//Component to ask for more info about a car
const CarFormInfoContact = ({ toggleModal, reference }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(askForCarSchema),
        mode: "onSubmit",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        reset();
        setTimeout(() => {
            toggleModal();
        }, 1500);
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    });

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50 z-50">
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
                    Demande de renseignement sur le véhicule
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-auto lg:gap-2 lg:items-start "
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="ref">Référence</label>
                        <input
                            type="text"
                            id="ref"
                            defaultValue={reference}
                            placeholder="Référence du véhicule"
                            name="ref"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("ref")}
                        />
                        {errors.ref && (
                            <span className="error-msg text-center">
                                {errors.ref?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="name">Nom</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Votre nom"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("name")}
                        />
                        {errors.name && (
                            <span className="error-msg text-center">
                                {errors.name?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Pour vous écrire"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("email")}
                        />
                        {errors.email && (
                            <span className="error-msg text-center">
                                {errors.email?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="phone">Téléphone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Pour vous appeler"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("phone")}
                        />
                        {errors.phone && (
                            <span className="error-msg text-center">
                                {errors.phone?.message}
                            </span>
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            rows="4"
                            cols="50"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("message")}
                        />
                        {errors.message && (
                            <span className="error-msg text-center">
                                {errors.message?.message}
                            </span>
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

export default CarFormInfoContact;
