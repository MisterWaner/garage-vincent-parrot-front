import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";

const CarModal = ({ car, onClose }) => {
    const [showInputs, setShowInputs] = useState(false);
    const [brandInput, setBrandInput] = useState(car.brand);
    const [modelInput, setModelInput] = useState(car.model);
    const [yearInput, setYearInput] = useState(car.year);
    const [colorInput, setColorInput] = useState(car.color);
    const [priceInput, setPriceInput] = useState(car.price);
    const [kilometersInput, setKilometersInput] = useState(car.kilometers);
    const [puissanceInput, setPuissanceInput] = useState(car.puissance);
    const [motorInput, setMotorInput] = useState(car.motor);
    const [isModified, setIsModified] = useState(false);

    const handleUpdate = () => {
        const updatedCar = {
            ...car,
            brand: brandInput,
            model: modelInput,
            year: yearInput,
            color: colorInput,
            price: priceInput,
            kilometers: kilometersInput,
            puissance: puissanceInput,
        };
        console.log(updatedCar);

        setBrandInput(updatedCar.brand);
        setModelInput(updatedCar.model);
        setYearInput(updatedCar.year);
        setColorInput(updatedCar.color);
        setPriceInput(updatedCar.price);
        setKilometersInput(updatedCar.kilometers);
        setPuissanceInput(updatedCar.puissance);
        setMotorInput(updatedCar.motor);

        setIsModified(false);
        setTimeout(() => {
            onClose();
        }, 1500);
    };

    const handleButtonClick = () => {
        if (!isModified) {
            setIsModified(true);
        } else {
            handleUpdate();
        }
        setShowInputs(!showInputs);
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

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
                <h2 className="text-lg font-bold mb-4">
                    {car.name} - {car.year}
                </h2>
                <div className="flex flex-col mb-4">
                    <div className="flex gap-4">
                        <p className="font-bold">Marque: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="text"
                                value={brandInput}
                                onChange={(e) => setBrandInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.brand}</span>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <p className="font-bold">Modèle: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="text"
                                value={modelInput}
                                onChange={(e) => setModelInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.model}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex gap-4">
                        <p className="font-bold">Année: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="text"
                                value={yearInput}
                                onChange={(e) => setYearInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.year}</span>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <p className="font-bold">Couleur: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="text"
                                value={colorInput}
                                onChange={(e) => setColorInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.color}</span>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <p className="font-bold">Prix: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="number"
                                value={priceInput}
                                onChange={(e) => setPriceInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.price}</span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col mb-4">
                    <div className="flex gap-4">
                        <p className="font-bold">Kilométrage: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="number"
                                value={kilometersInput}
                                onChange={(e) =>
                                    setKilometersInput(e.target.value)
                                }
                            />
                        ) : (
                            <span>{car.kilometers}</span>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <p className="font-bold">Puissance: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="number"
                                value={puissanceInput}
                                onChange={(e) =>
                                    setPuissanceInput(e.target.value)
                                }
                            />
                        ) : (
                            <span>{car.puissance}</span>
                        )}
                    </div>
                    <div className="flex gap-4">
                        <p className="font-bold">Motorisation: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                type="text"
                                value={motorInput}
                                onChange={(e) =>
                                    setPuissanceInput(e.target.value)
                                }
                            />
                        ) : (
                            <span>{car.motor}</span>
                        )}
                    </div>
                    {car.image ? (
                        <div className="flex gap-4 mt-4">
                            <p className="font-bold">Image: </p>
                            <span>
                                <img
                                    src={car.image}
                                    className="w-80 rounded-md"
                                    alt=""
                                />
                            </span>
                        </div>
                    ) : (
                        <p>Pas d&apos;image disponible</p>
                    )}
                </div>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button
                        name={isModified ? "Valider" : "Modifier"}
                        fn={handleButtonClick}
                    />
                    <Button name={isModified ? "Annuler" : "Fermer"} fn={onClose} />
                </div>
            </div>
        </div>
    );
};

export default CarModal;
