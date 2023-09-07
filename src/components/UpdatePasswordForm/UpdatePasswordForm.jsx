/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import {passwordSchema} from "../../Validations/passwordValidation.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUsersDataToBack } from "../../services/updateDataToBack.js";

const UpdatePasswordForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(passwordSchema),
        mode: "onSubmit",
    });

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        const passwordFormData = new FormData(event.target);

        try {
            
            const res = await updateUsersDataToBack(passwordFormData);
            console.log(res);

            
            alert("Le mot de passe a bien été mis à jour");
            reset();
            
        } catch (error) {
            console.log("Erreur d'envoi des données au back", error);
            alert(
                "Il y a eut un problème pendant la mise à jour du mot de passe, recommencez ulterieurement"
            );
        }
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full h-full flex flex-col items-center lg:items-start"
            >
                <div className="flex flex-col mb-4 w-full">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        autoComplete="new-password"
                        name="password"
                        id="password"
                        className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        {...register("password")}
                    />
                    {errors.password ? (
                        <p className="error-msg text-center">
                            {errors.password?.message}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex flex-col mb-4 w-full">
                    <label htmlFor="confirmation">Confirmation</label>
                    <input
                        type="password"
                        name="confirmation"
                        autoComplete="new-password"
                        id="confirmation"
                        className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        {...register("confirmation")}
                    />
                    {errors.confirmation ? (
                        <p className="error-msg text-center">
                            {errors.confirmation?.message}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="flex mb-4 w-full">
                    <Button name="Valider" />
                </div>
            </form>
        </div>
    );
};

export default UpdatePasswordForm;
