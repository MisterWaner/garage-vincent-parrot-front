import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createCarSchema } from "../../Validations/createCarValidation.js";
import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
const AddCar = ({ toggleModal }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(createCarSchema),
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
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-3/5 text-black-02 lg:w-1/2">
                <div className="w-full flex justify-end">
                    <button
                        onClick={toggleModal}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg text-center font-bold mb-4">
                    Ajouter une voiture
                </h2>
                <form
                    action=""
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
                        <label htmlFor="brand">Marque</label>
                        <input
                            name="brand"
                            id="brand"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("brand")}
                        />
                        {errors.brand ? (
                            <p className="error-msg text-center">
                                {errors.brand?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="model">Model</label>
                        <input
                            name="model"
                            id="model"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("model")}
                        />
                        {errors.model ? (
                            <p className="error-msg text-center">
                                {errors.model?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="year">Année</label>
                        <input
                            name="year"
                            id="year"
                            type="number"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("year")}
                        />
                        {errors.year ? (
                            <p className="error-msg text-center">
                                {errors.year?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="color">Couleur</label>
                        <input
                            name="color"
                            id="color"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("color")}
                        />
                        {errors.color ? (
                            <p className="error-msg text-center">
                                {errors.color?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="price">Prix</label>
                        <input
                            name="price"
                            id="price"
                            type="number"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("price")}
                        />
                        {errors.price ? (
                            <p className="error-msg text-center">
                                {errors.price?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-row gap-2 items-center mb-4 w-full">
                        <label htmlFor="image">Image</label>
                        <input
                            name="image"
                            id="image"
                            type="file"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("image")}
                        />
                        {errors.image ? (
                            <p className="error-msg text-center">
                                {errors.image?.message}
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

export default AddCar;
