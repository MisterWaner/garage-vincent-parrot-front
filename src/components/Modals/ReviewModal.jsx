/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import Button from "../Button/Button";
import formatBackendDate from "../../services/formatBackendDate";


//Component to display a review, validate it and delete it
const ReviewModal = ({ review, onClose, handleReviewDeletionModal, markReviewAsValidated }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    //Function to format the date in french format
    const formatDate = (date) => {
        if (date) {
            const jsDate = formatBackendDate(date);
            return jsDate.toLocaleDateString("fr-FR");
        }
        return "";
    };

    //Function to delete a review
    const handleReviewDeleteButtonClick = async () => {
        if (review) {
            try {
                console.log(review);
                handleReviewDeletionModal(review);
                alert("Le commentaire a bien été supprimé");

                onClose();
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        } else {
            console.error("Aucun commentaire selectionné pour la suppression");
        }
    }

    //Function to validate a review
    const handleReviewValidationButtonClick = async () => {
        if (review) {
            try {
                console.log(review);
                markReviewAsValidated(review.id);
                alert("Le commentaire a bien été validé");

                onClose();
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        } else {
            console.error("Aucun commentaire selectionné pour la validation");
        }
    }

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
                <h2 className="text-lg font-bold mb-4">{review.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <p className="font-bold">Auteur: </p>
                    <span>{review.firstname} {review.lastname}</span>
                    <p className="font-bold">Email:</p>
                    <span>{review.email}</span>
                    <p className="font-bold">Titre: </p>
                    <span>{review.title}</span>
                    <p className="font-bold">Message: </p>
                    <span className="mb-4 md:my-4">{review.comment}</span>
                    <p className="font-bold">Note: </p>
                    <span>{review.rating}</span>
                    <p className="font-bold">Date: </p>
                    <span>{formatDate(review.date)}</span>
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button name="Approuver" fn={handleReviewValidationButtonClick} />
                    <Button name="Supprimer" fn={handleReviewDeleteButtonClick} />
                    <Button name="Répondre" fn={onClose} />
                </div>
            </div>
        </div>
    );
};

export default ReviewModal;
