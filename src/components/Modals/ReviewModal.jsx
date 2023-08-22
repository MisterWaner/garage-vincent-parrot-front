/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";

const ReviewModal = ({ review, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50 overflow-scroll">
            <div className="bg-white p-8 rounded-lg min-w-fit min-h-fit mt-auto text-black-02 lg:w-1/2 lg:mt-0">
                <div className="w-full flex justify-end">
                    <button
                        onClick={onClose}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">{review.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="font-bold">Auteur: </p>
                    <span>{review.author}</span>
                    <p className="font-bold">Titre: </p>
                    <span>{review.title}</span>
                    <p className="font-bold">Message: </p>
                    <span>{review.message}</span>
                    <p className="font-bold">Note: </p>
                    <span>{review.rating}</span>
                    <p className="font-bold">Date: </p>
                    <span>{review.date}</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button name="Approuver" fn={onClose} />
                    <Button name="Refuser" fn={onClose} />
                    <Button name="Répondre" fn={onClose} />
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
