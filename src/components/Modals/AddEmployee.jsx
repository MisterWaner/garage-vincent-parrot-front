import { useEffect } from "react"
import { XCircleIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { employeeSchema } from "../../Validations/employeeValidation.js";
import { sendEmployeesDataToBack } from "../../services/sendDataToBack.js";
import Button from "../Button/Button";

// eslint-disable-next-line react/prop-types
const AddEmployee = ({ toggleModal, addEmployeeToList }) => {
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
        
        const employeeFormData = new FormData(event.target);
        try {
            const res = await sendEmployeesDataToBack(employeeFormData);
            const newEmployee = res.data;
            addEmployeeToList(newEmployee);
            reset();
            console.log("data envoyé :", newEmployee);
            alert("L'employé a bien été ajouté");
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
            <div className={`bg-white p-8 min-h-fit ${errors ? "mt-auto" : "mt-0"}mt-auto rounded-lg w-3/5 text-black-02  lg:w-2/3`}>
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
                            <p className="error-msg text-center">{errors.lastname?.message}</p>
                        ) : (
                            ""
                        )}
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="services">Service</label>
                        <input
                            name="services"
                            id="services"
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            {...register("services")}
                        />
                        {errors.services ? (
                            <p className="error-msg text-center">
                                {errors.services?.message}
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

export default AddEmployee;
