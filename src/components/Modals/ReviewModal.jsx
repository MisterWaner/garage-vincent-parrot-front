import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
const ReviewModal = ({ onClose, toggleModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center mt-10">
            <div className="bg-white p-8 rounded-lg w-1/3 text-black-02">
                <div className="w-full flex justify-end">
                    <button onClick={toggleModal} className="w-10 text-red-02">
                        <XCircleIcon />
                    </button>
                </div>

                <h2 className="text-xl text-center font-bold mb-4">
                    Donnez nous votre avis
                </h2>
                <form className="w-full h-full flex flex-col items-center">
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="">Nom</label>
                        <input
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="">Prénom</label>
                        <input
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="">Message</label>
                        <textarea
                            cols="30"
                            rows="5"
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                        />
                    </div>
                    <div className="flex flex-col mb-4 w-full">
                        <Button name="Envoyer" fn={onClose} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ReviewModal;
