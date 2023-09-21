/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { planningSchema } from "../../Validations/planningValidation.js";
import { sendPlanningDataToBack } from "../../services/sendDataToBack.js";

//Component to add a planning to the list
const AddPlanningForm = ({ addPlanningToList }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(planningSchema),
        mode: "onSubmit",
    });

    const onInvalid = (errors) => console.error(errors);

    const onSubmit = async (data, event) => {
        event.preventDefault();
        console.log(data);

        const planningFormData = new FormData(event.target);

        try {
            const res = await sendPlanningDataToBack(planningFormData);
            console.log(res);
            const newPlanning = res.data;
            console.log("data envoyé: ", newPlanning);
            addPlanningToList(newPlanning);
            alert("Planning ajouté");
            reset();
        } catch (error) {
            console.log("Erreur d'envoi des données au back", error);
            alert(
                "Il y a eut un problème pendant la création du planning, recommencez ulterieurement"
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
                    <label htmlFor="day">Jour</label>
                    <input
                        type="text"
                        name="day"
                        id="day"
                        className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        {...register("day")}
                    />
                    {errors.day ? (
                        <p className="error-msg text-center">
                            {errors.day?.message}
                        </p>
                    ) : (
                        ""
                    )}
                </div>
                <div className="w-full md:gap-4 md:flex md:flex-row md:justify-between">
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="morningOpeningHour">Ouverture du matin</label>
                        <input
                            type="text"
                            name="morningOpeningHour"
                            id="morningOpeningHour"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("morningOpeningHour")}
                        />
                        {errors.morningOpeningHour ? (
                            <p className="error-msg text-center">
                                {errors.morningOpeningHour?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                
                <div className="flex flex-col mb-4 w-full">
                    <label htmlFor="morningClosingHour">Fermeture du matin</label>
                    <input
                        type="text"
                        name="morningClosingHour"
                        id="morningClosingHour"
                        className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        {...register("morningClosingHour")}
                    />
                    {errors.morningClosingHour ? (
                        <p className="error-msg text-center">
                            {errors.morningClosingHour?.message}
                        </p>
                    ) : (
                        ""
                    )}
                    </div>
                </div>
                <div className="w-full md:gap-4 md:flex md:flex-row md:justify-between">
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="afternoonOpeningHour">Ouverture de l&apos;après-midi</label>
                        <input
                            type="text"
                            name="afternoonOpeningHour"
                            id="afternoonOpeningHour"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("afternoonOpeningHour")}
                        />
                        {errors.afternoonOpeningHour ? (
                            <p className="error-msg text-center">
                                {errors.afternoonOpeningHour?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="afternoonClosingHour">Fermeture de l&apos;après-midi</label>
                        <input
                            type="text"
                            name="afternoonClosingHour"
                            id="afternoonClosingHour"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("afternoonClosingHour")}
                        />
                        {errors.afternoonClosingHour ? (
                            <p className="error-msg text-center">
                                {errors.afternoonClosingHour?.message}
                            </p>
                        ) : (
                            ""
                        )}
                    </div>
                </div>

                <div className="flex mb-4 w-full">
                    <Button name="Valider" />
                </div>
            </form>
        </div>
    );
};

export default AddPlanningForm;
