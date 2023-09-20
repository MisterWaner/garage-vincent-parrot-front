/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordSchema } from "../../Validations/passwordValidation";
import { updatePasswordDataToBack } from "../../services/updateDataToBack";
//import Axios from "../../api/axios";
import Button from "../Button/Button";
import Cookies from "js-cookie";

const UpdatePasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(passwordSchema),
        mode: "onSubmit",
    });
    const userId = Cookies.get("id");

    const onInvalid = (errors) => console.error(errors);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        const passwordFormData = new FormData(event.target);
        try {
            const res = await updatePasswordDataToBack(userId, passwordFormData)

            if (res.status === 200) {
                reset();
                console.log("data envoyé:", res.data);
                alert("Le mot de passe a bien été mis à jour");
            }

        } catch (error) {
            console.error(
                "Une erreur est survenue lors de la mise à jour du mot de passe",
                error
            );
        }
    };

    return (
        <div className="w-full">
            <form
                onSubmit={handleSubmit(onSubmit, onInvalid)}
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
