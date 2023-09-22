/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { carSchema } from "../../Validations/carValidation.js";
import Button from "../Button/Button.jsx";
import { sendCarsDataToBack } from "../../services/sendDataToBack.js";


//Component to add a car to the list
const AddCar = ({ toggleModal, addCarToList }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(carSchema),
        mode: "onSubmit",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        
        const carFormData = new FormData(event.target);
        
        try {
            const res = await sendCarsDataToBack(carFormData);
            const newCar = res.data;
            addCarToList(newCar);
            reset();
            console.log("data envoyé :", newCar);
            alert("Le véhicule a bien été ajouté");
            toggleModal();
            console.log(data);
        } catch (error) {
            console.log("Erreur d'envoi des données au back", error);
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 overflow-y-scroll flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white min-h-fit mt-auto p-8 rounded-lg w-10/12 md:w-3/5  text-black-02 lg:w-5/6 lg:mt-24">
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
                    encType="multipart/form-data"
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-4 lg:grid-rows-auto lg:gap-2 lg:items-start "
                >
                    <div className="flex flex-col mb-2 w-full">
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
                    <div className="flex flex-col mb-2 w-full">
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
                    <div className="flex flex-col mb-2 w-full">
                        <label htmlFor="immat">Immatriculation</label>
                        <input
                            name="immat"
                            id="immat"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("immat")}
                        />
                        {errors.immat ? (
                            <p className="error-msg text-center">
                                {errors.immat?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-2 w-full">
                        <label htmlFor="year">Année</label>
                        <input
                            name="year"
                            id="year"
                            min="1960"
                            max="2023"
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
                    <div className="flex flex-col mb-2 w-full">
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
                    <div className="flex flex-col mb-2 w-full">
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
                    <div className="flex flex-col mb-2 w-full">
                        <label htmlFor="kilometers">Kilomètres</label>
                        <input
                            name="kilometers"
                            id="kilometers"
                            type="number"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("kilometers")}
                        />
                        {errors.kilometers ? (
                            <p className="error-msg text-center">
                                {errors.kilometers?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-2 w-full">
                        <label htmlFor="puissance">Puissance</label>
                        <input
                            name="puissance"
                            id="puissance"
                            type="number"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("puissance")}
                        />
                        {errors.puissance ? (
                            <p className="error-msg text-center">
                                {errors.puissance?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-2 w-full">
                        <label htmlFor="motor">Motorisation</label>
                        <input
                            name="motor"
                            id="motor"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("motor")}
                        />
                        {errors.motor ? (
                            <p className="error-msg text-center">
                                {errors.motor?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-2 w-full">
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
                    <div className="flex mb-2 w-full lg:col-start-4 lg:row-start-4">
                        <Button name="Valider" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddCar;
