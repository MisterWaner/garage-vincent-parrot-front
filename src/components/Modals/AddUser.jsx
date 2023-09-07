import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { userSchema } from "../../Validations/userValidation.js";
import { sendUsersDataToBack } from "../../services/sendDataToBack.js";
import Button from "../Button/Button.jsx";

// eslint-disable-next-line react/prop-types
const AddUser = ({ toggleModal, addUserToList }) => {
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(userSchema),
        mode: "onSubmit",
    });

    const onInvalid = (errors) => console.error(errors);

    const onSubmit = async (data, event) => {
        event.preventDefault();

        const userFormData = new FormData(event.target);

        try {
            const res = await sendUsersDataToBack(userFormData);
            const newUser = res.data;
            addUserToList(newUser);
            reset();
            console.log("data envoyé :", newUser);
            alert("L'utilisateur a bien été ajouté");
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
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50 overflow-scroll">
            <div
                className={`bg-white p-8 min-h-fit ${
                    errors ? "mt-auto" : "mt-0"
                }mt-auto rounded-lg w-3/5 text-black-02  lg:w-2/3`}
            >
                <div className="w-full flex justify-end">
                    <button
                        onClick={toggleModal}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg text-center font-bold mb-4">
                    Ajouter un utilisateur
                </h2>
                <form
                    onSubmit={handleSubmit(onSubmit, onInvalid)}
                    className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start "
                >
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
                        <label htmlFor="lastname">Nom</label>
                        <input
                            name="lastname"
                            id="lastname"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("lastname")}
                        />
                        {errors.lastname ? (
                            <p className="error-msg text-center">
                                {errors.lastname?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="services">Service</label>
                        <select
                            name="services"
                            id="services"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            onChange={(e) =>
                                setValue("services", e.target.value, {
                                    shouldValidate: true,
                                })
                            }
                            {...register("services")}
                        >
                            <option value="">Choisir un service</option>
                            <option value="Mécanique">Mécanique</option>
                            <option value="Carrosserie">Carrosserie</option>
                            <option value="Vente">Vente</option>
                            <option value="Direction">Direction</option>
                        </select>
                        {errors.services ? (
                            <p className="error-msg text-center">
                                {errors.services?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="role">Rôle</label>
                        <select
                            name="role"
                            id="role"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            onChange={(e) =>
                                setValue("role", e.target.value, {
                                    shouldValidate: true,
                                })
                            }
                            {...register("role")}
                        >
                            <option value="">Choisir un rôle</option>
                            <option value="Admin">Admin</option>
                            <option value="Utilisateur">Utilisateur</option>
                        </select>
                        {errors.role ? (
                            <p className="error-msg text-center">
                                {errors.role?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex mb-4 w-full lg:col-start-2 lg:row-start-3">
                        <Button name="Valider" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
