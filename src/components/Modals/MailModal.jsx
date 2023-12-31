/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";
import formatBackendDate from "../../services/formatBackendDate";

//Component to display a mail, answer it and delete it
const MailModal = ({ mail, onClose, handleMailDeletionModal }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const formatDate = (date) => {
        if (date) {
            const jsDate = formatBackendDate(date);
            return jsDate.toLocaleDateString("fr-FR");
        }
        return "";
    };

    const handleMailDeleteButtonClick = async () => {
        if (mail) {
            try {
                console.log(mail);
                handleMailDeletionModal(mail);
                alert("Le mail a bien été supprimé");

                onClose();
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        } else {
            console.error("Aucun mail selectionné pour la suppression");
        }
    };
    return (
        <div className="fixed inset-0 overflow-y-scroll flex items-center justify-center z-50 bg-black-02 bg-opacity-50">
            <div className="bg-white mt-auto min-h-fit p-8 rounded-lg w-10/12 md:w-3/5  text-black-02 lg:w-5/6 lg:mt-24">
                <div className="w-full flex justify-end">
                    <button
                        onClick={onClose}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">{mail.subject}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="font-bold">Auteur: </p>
                    <span>
                        {mail.firstname} {mail.lastname}
                    </span>
                    <p className="font-bold">Sujet: </p>
                    <span>{mail.subject}</span>
                    <p className="font-bold mt-4 md:my-4">Message: </p>
                    <span className="mb-4 md:my-4">{mail.message}</span>
                    <p className="font-bold">Coordonnées de contact: </p>
                    <div className="flex flex-col">
                        <p>{mail.email}</p>
                        <p className="mb-4">{mail.phone}</p>
                    </div>
                    <p className="font-bold">Date: </p>
                    <span>{formatDate(mail.date)}</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button name="Répondre" fn={onClose} />
                    <Button name="Supprimer" fn={handleMailDeleteButtonClick} />
                </div>
            </div>
        </div>
    );
};

export default MailModal;
