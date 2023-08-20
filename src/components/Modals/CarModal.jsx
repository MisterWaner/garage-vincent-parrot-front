/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";

const CarModal = ({ car, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-3/5 text-black-02 lg:w-1/2">
            <div className="w-full flex justify-end">
                    <button
                        onClick={onClose}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">{car.name}</h2>
                <p>{car.year}</p>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button name="Modifier" fn={onClose} />
                    <Button name="Supprimer" fn={onClose} />
                </div>
            </div>
        </div>
    );
};

export default CarModal;
