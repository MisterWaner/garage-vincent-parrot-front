import Button from "../Button/Button";
import { userSchema } from "../../Validations/userValidation.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const UpdatePasswordForm = () => {
    return (
        <div className="w-full">
            <form className="w-full h-full flex flex-col items-center lg:items-start">
                <div className="flex flex-col mb-4 w-full">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="bg-yellow-02 rounded-sm text-black-02 p-2"
                    />
                </div>
                <div className="flex flex-col mb-4 w-full">
                    <label htmlFor="confirmation">Confirmation</label>
                    <input
                        type="password"
                        name="confirmation"
                        id="confirmation"
                        className="bg-yellow-02 rounded-sm text-black-02 p-2"
                    />
                </div>
                <div className="flex mb-4 w-full">
                    <Button name="Valider" />
                </div>
            </form>
        </div>
    );
};

export default UpdatePasswordForm;
