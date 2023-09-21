/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CarCard from "../CarCard/CarCard";

//Cars gallery component to display the cars card in the cars page
const CarsGallery = ({ cars }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Load cars data from API;
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <div className="w-full flex flex-col gap-6 xs:justify-center md:justify-normal ">
            {isLoading ? (
                <p className="w-full text-center text-2xl text-red-02 mt-6 bg-red-300 rounded-md py-2 px-5 border-2 border-red-02 md:mt-0 md:h-fit">
                    Chargement des véhicules...
                </p>
            ) : cars.length === 0 ? (
                <p className="w-full text-center text-2xl text-red-02 mt-6 bg-red-300 rounded-md py-2 px-5 border-2 border-red-02 md:mt-0 md:h-fit">
                    Aucun véhicule trouvé.
                </p>
            ) : (
                <>
                    <p className="w-full text-center text-2xl text-black-02 mt-6 bg-yellow-02 rounded-md py-2 px-5 border-2 border-black-02 md:mt-0 md:h-fit">
                        {cars.length}{" "}
                        {cars.length > 1
                            ? "véhicules trouvés"
                            : "véhicule trouvé"}
                    </p>
                            <div className="flex flex-wrap gap-6">
                                {cars.map((car) => (
                                                        <CarCard key={car.immat} car={car} />
                                                    ))}
                            </div>
                </>
            )}
        </div>
    );
};

export default CarsGallery;
