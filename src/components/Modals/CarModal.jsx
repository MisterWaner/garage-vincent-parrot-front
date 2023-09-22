import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { updateCarsDataToBack } from "../../services/updateDataToBack";

//Component to display details of cars and update them in the list
const CarModal = ({
    car,
    onClose,
    updateCarInList,
    handleCarDeletionModal,
}) => {
    const [showInputs, setShowInputs] = useState(false);
    const [brandInput, setBrandInput] = useState(car.brand);
    const [modelInput, setModelInput] = useState(car.model);
    const [yearInput, setYearInput] = useState(car.year);
    const [colorInput, setColorInput] = useState(car.color);
    const [priceInput, setPriceInput] = useState(car.price);
    const [kilometersInput, setKilometersInput] = useState(car.kilometers);
    const [puissanceInput, setPuissanceInput] = useState(car.puissance);
    const [motorInput, setMotorInput] = useState(car.motor);
    const [immatInput, setImmatInput] = useState(car.immat);
    const [isModified, setIsModified] = useState(false);

    const handleUpdate = async () => {
        const updatedCar = {
            ...car,
            brand: brandInput,
            model: modelInput,
            year: yearInput,
            color: colorInput,
            price: priceInput,
            kilometers: kilometersInput,
            puissance: puissanceInput,
            motor: motorInput,
            immat: immatInput,
        };
        console.log(updatedCar);

        try {
            const res = await updateCarsDataToBack(car.immat, updatedCar);

            if (res) {
                updateCarInList(updatedCar);
                console.log(updatedCar);

                setIsModified(false);

                alert("Les données ont bien été mises à jour");

                setTimeout(() => {
                    onClose();
                }, 1500);
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
        if (car) {
            try {
                console.log(car);
                await handleCarDeletionModal(car);

                console.log(car);
                setTimeout(() => {
                    onClose();
                }, 1500);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        } else {
            console.error("Aucune voiture sélectionnée pour la suppression");
        }
    };

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

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
                <h2 className="text-lg font-bold mb-4">
                    {car.brand} {car.model} - {car.year}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <>
                        <p className="font-bold">Marque: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={brandInput}
                                onChange={(e) => setBrandInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.brand}</span>
                        )}
                    </>
                    <>
                        <p className="font-bold">Immatriculation: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={immatInput}
                                onChange={(e) => setImmatInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.immat}</span>
                        )}
                    </>
                    <>
                        <p className="font-bold">Modèle: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={modelInput}
                                onChange={(e) => setModelInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.model}</span>
                        )}
                    </>

                    <>
                        <p className="font-bold">Année: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={yearInput}
                                onChange={(e) => setYearInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.year}</span>
                        )}
                    </>
                    <>
                        <p className="font-bold">Couleur: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={colorInput}
                                onChange={(e) => setColorInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.color}</span>
                        )}
                    </>
                    <>
                        <p className="font-bold">Prix: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="number"
                                value={priceInput}
                                onChange={(e) => setPriceInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.price} €</span>
                        )}
                    </>

                    <>
                        <p className="font-bold">Kilométrage: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="number"
                                value={kilometersInput}
                                onChange={(e) =>
                                    setKilometersInput(e.target.value)
                                }
                            />
                        ) : (
                            <span>{car.kilometers} km</span>
                        )}
                    </>
                    <>
                        <p className="font-bold">Puissance: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="number"
                                value={puissanceInput}
                                onChange={(e) =>
                                    setPuissanceInput(e.target.value)
                                }
                            />
                        ) : (
                            <span>{car.puissance} ch</span>
                        )}
                    </>
                    <>
                        <p className="font-bold">Motorisation: </p>
                        {showInputs ? (
                            <input
                                className="bg-yellow-02 rounded-sm text-black-02 p-2 mb-4"
                                type="text"
                                value={motorInput}
                                onChange={(e) => setMotorInput(e.target.value)}
                            />
                        ) : (
                            <span>{car.motor}</span>
                        )}
                    </>
                    {car.image ? (
                        <>
                            <p className="font-bold">Image: </p>
                            <span>
                                <img
                                    src={car.image}
                                    className="w-80 rounded-md"
                                    alt=""
                                />
                            </span>
                        </>
                    ) : (
                        <p>Pas d&apos;image disponible</p>
                    )}
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

export default CarModal;
