/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";

const MailModal = ({ mail, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50 overflow-scroll">
            <div className="bg-white p-8 rounded-lg w-2/3  min-h-fit text-black-02 lg:w-1/2">
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
                    <div className="flex flex-col xl:flex-row">
                        <span className="break-word">
                            {mail.email}
                            {" - "}
                        </span>
                        <span className="break-word">
                            {"- "}
                            {mail.phone}
                        </span>
                    </div>
                    <p className="font-bold">Date: </p>
                    <span>{mail.date}</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button name="Répondre" fn={onClose} />
                    <Button name="Supprimer" fn={onClose} />
                </div>
            </div>
        </div>
    );
};

export default MailModal;