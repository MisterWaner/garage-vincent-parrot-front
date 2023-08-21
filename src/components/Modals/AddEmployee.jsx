import { useEffect } from "react"
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../../Validations/employeeValidation.js";

import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const AddEmployee = ({ toggleModal }) => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(employeeSchema),
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
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50 overflow-scroll">
            <div className="bg-white p-8 min-h-fit mt-auto rounded-lg w-3/5 text-black-02 lg:w-1/2 lg:mt-0">
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
                        <label htmlFor="lastname">Nom</label>
                        <input
                            name="lastname"
                            id="lastname"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("lastname")}
                        />
                        {errors.lastname ? (
                            <p className="error-msg text-center">{errors.lastname?.message}</p>
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
                    <div className="flex mb-4 w-full lg:col-start-2">
                        <Button name="Valider" />
                    </div>
                </form>
                
            </div>
        </div>
    );
};

export default AddEmployee;
