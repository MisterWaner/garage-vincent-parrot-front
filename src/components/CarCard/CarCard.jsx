/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../Button/Button";
import CarFormInfoContact from "../Modals/CarFormInfoContact";

const CarCard = ({ car }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {/*<!-- Car card component --> */}
            <div className="overflow-hidden rounded bg-white w-80 text-black-02 mt-5">
                {/*  <!-- Image --> */}
                <figure>
                    <img
                        src={car.image}
                        alt="card image"
                        className="aspect-video w-full"
                    />
                </figure>
                {/*  <!-- Body--> */}
                <div className="p-6">
                    <header className="mb-4">
                        <h3 className="text-xl font-medium text-black-02">
                            {car.brand} {car.model}
                        </h3>
                        <p className=" text-slate-400">{car.price} €</p>
                    </header>
                    <div>
                        <ul>
                            <li className="mb-2 flex w-3/4 justify-between">
                                <p className="font-bold">Année:</p>
                                <p>{car.year}</p>
                            </li>
                            <li className="mb-2 flex w-3/4 justify-between">
                                <p className="font-bold">Kilométrage:</p>
                                <p>{car.kilometers} km</p>
                            </li>
                            <li className="mb-2 flex w-3/4 justify-between">
                                <p className="font-bold">Puissance:</p>
                                <p>{car.puissance} CV</p>
                            </li>
                            <li className="mb-2 flex w-3/4 justify-between">
                                <p className="font-bold">Couleur:</p>
                                <p>{car.color}</p>
                            </li>
                            <li className="mb-2 flex w-3/4 justify-between">
                                <p className="font-bold">Motorisation:</p>
                                <p>{car.motor}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-end p-6 pt-0">
                    <Button name="En savoir plus" fn={() => toggleModal()} />
                </div>
            </div>
            {isOpen && <CarFormInfoContact toggleModal={toggleModal} />}
            {/*<!-- End car card component --> */}
        </>
    );
};

export default CarCard;
