/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";
import { updatePlanningDataToBack } from "../../services/updateDataToBack";

//Component to display a planning, update it and delete it
const PlanningModal = ({
    planning,
    onClose,
    updatePlanningInList,
    handlePlanningDeletationModal,
}) => {
    const [showInputs, setShowInputs] = useState(false);
    const [dayInput, setDayInput] = useState(planning.day);
    const [morningOpeningHourInput, setMorningOpeningHourInput] = useState(
        planning.morningOpeningHour
    );
    const [morningClosingHourInput, setMorningClosingHourInput] = useState(
        planning.morningClosingHour
    );
    const [afternoonOpeningHourInput, setAfternoonOpeningHourInput] = useState(
        planning.afternoonOpeningHour
    );
    const [afternoonClosingHourInput, setAfternoonClosingHourInput] = useState(
        planning.afternoonClosingHour
    );
    const [isModified, setIsModified] = useState(false);

    //Function to update a planning
    const handleUpdate = async () => {
        const updatedPlanning = {
            ...planning,
            day: dayInput,
            morningOpeningHour: morningOpeningHourInput,
            morningClosingHour: morningClosingHourInput,
            afternoonOpeningHour: afternoonOpeningHourInput,
            afternoonClosingHour: afternoonClosingHourInput,
        };

        try {
            const res = await updatePlanningDataToBack(
                planning.id,
                updatedPlanning
            );
            console.log(res);

            if (res) {
                updatePlanningInList(updatedPlanning);
                console.log(updatedPlanning);
                setIsModified(false);
                alert("Les données ont bien été mises à jour");
                onClose();
            }
        } catch (error) {
            console.log("Une erreur est survenue", error);
        }
    };

    //Function to handle the update button
    const handleButtonUpdateClick = () => {
        if (!isModified) {
            setIsModified(true);
        } else {
            handleUpdate();
        }
        setShowInputs(!showInputs);
    };

    //Function to handle the delete button
    const handleDeleteButtonClick = async () => {
        if (planning) {
            try {
                console.log(planning);
                handlePlanningDeletationModal(planning);

                console.log(planning);
                setTimeout(() => {
                    onClose();
                }, 1000);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
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
                        onClick={onClose}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">{planning.day}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <>
                        <p className="font-bold md:col-start-1">Jour</p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={dayInput}
                                onChange={(e) => setDayInput(e.target.value)}
                            />
                        ) : (
                            <span className="md:col-start-2 mb-4">
                                {planning.day}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">
                            Ouverture du matin
                        </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={morningOpeningHourInput}
                                onChange={(e) =>
                                    setMorningOpeningHourInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2 mb-4">
                                {planning.morningOpeningHour}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">
                            Fermeture du matin
                        </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={morningClosingHourInput}
                                onChange={(e) =>
                                    setMorningClosingHourInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2 mb-4">
                                {planning.morningClosingHour}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">
                            Ouverture de l&apos;après-midi
                        </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={afternoonOpeningHourInput}
                                onChange={(e) =>
                                    setAfternoonOpeningHourInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2 mb-4">
                                {planning.afternoonOpeningHour}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">
                            Fermeture de l&apos;après-midi
                        </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={afternoonClosingHourInput}
                                onChange={(e) =>
                                    setAfternoonClosingHourInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2 mb-4">
                                {planning.afternoonClosingHour}
                            </span>
                        )}
                    </>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button
                        name={isModified ? "Valider" : "Mettre à jour"}
                        fn={handleButtonUpdateClick}
                    />
                    <Button
                        name={isModified ? "Annuler" : "Supprimer"}
                        fn={isModified ? onClose : handleDeleteButtonClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default PlanningModal;
