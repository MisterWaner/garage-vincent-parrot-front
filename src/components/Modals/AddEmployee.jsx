//import { useEffect } from "react"
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createEmployeeSchema } from "../../Validations/createEmployeeValidation.js";

import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const AddEmployee = ({ toggleModal }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createEmployeeSchema),
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

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-2/4 text-black-02">
                <div className="w-full flex justify-end">
                    <button
                        onClick={toggleModal}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg text-center font-bold mb-4">
                    Ajouter un employé
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    action=""
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
                            <p className="error-msg text-center">{errors.name?.message}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="firstname">Prénom</label>
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
                            id="email"
                            type="email"
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
                        <label htmlFor="service">Service</label>
                        <input
                            name="service"
                            id="service"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("service")}
                        />
                        {errors.service ? (
                            <p className="error-msg text-center">
                                {errors.service?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full col-span-2">
                        <Button name="Valider" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default AddEmployee;
