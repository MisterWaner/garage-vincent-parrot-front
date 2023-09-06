import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { updateUsersDataToBack } from "../../services/updateDataToBack";

const UserModal = ({ user, onClose, updateUserInList, handleUserDeletionModal }) => {
    const [showInputs, setShowInputs] = useState(false);
    const [firstnameInput, setFirstnameInput] = useState(user.firstname);
    const [lastnameInput, setLastnameInput] = useState(user.lastname);
    const [serviceInput, setServiceInput] = useState(user.services);
    const [isModified, setIsModified] = useState(false);


    const handleUpdate = async () => {
        const updatedUser = {
            ...user,
            firstname: firstnameInput,
            lastname: lastnameInput,
            services: serviceInput,
        }        

        try {
            const res = await updateUsersDataToBack(
                user.id,
                updatedUser,
                user.role
            );
            console.log(res);

            if(res) {
                updateUserInList(updatedUser);
                console.log(updatedUser);
                setIsModified(false);
                alert("Les données ont bien été mises à jour");
                onClose();
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
        
    };
    const handleButtonUpdateClick = () => {
        if (!isModified) {
            setIsModified(true);
        } else {
            handleUpdate();
        }
        setShowInputs(!showInputs);
    };

    const handleDeleteButtonClick = async () => {
        if (user) {
            try {
                console.log(user);
                handleUserDeletionModal(user);

                console.log(user);
                setTimeout(() => {
                    onClose();
                }, 1500);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        } else {
            console.error("Aucun employé selectionné pour la suppression");
        }
    }

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
                        onClick={onClose}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">
                    {user.firstname + " " + user.lastname}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <>
                        <p className="font-bold md:col-start-1">Nom :</p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={lastnameInput}
                                onChange={(e) =>
                                    setLastnameInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2">
                                {user.lastname}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">Prénom :</p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={firstnameInput}
                                onChange={(e) =>
                                    setFirstnameInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2">
                                {user.firstname}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">Service :</p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 md:col-start-2 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={serviceInput}
                                onChange={(e) =>
                                    setServiceInput(e.target.value)
                                }
                            />
                        ) : (
                            <span className="md:col-start-2">
                                {user.services}
                            </span>
                        )}
                    </>
                    <>
                        <p className="font-bold md:col-start-1">Email :</p>

                        <span className="md:col-start-2">{user.email}</span>
                    </>
                </div>

                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button
                        name={isModified ? "Valider" : "Modifier"}
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

export default UserModal;
