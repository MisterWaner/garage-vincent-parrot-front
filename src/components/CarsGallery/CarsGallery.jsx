/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import CarCard from "../CarCard/CarCard";
import { useFilter } from "../../context/FilterContext";
import Axios from "../../api/axios.js";

const CarsGallery = () => {
    const { filters } = useFilter();
    const [filteredCars, setFilteredCars] = useState([]);
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getCarsDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/cars");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                setCarsData(res.data);
                setLoading(false);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données",
                    error
                );
                setLoading(false);
            }
        };
        getCarsDataFromBack();
    }, []);

    // const filterCars = () => {
    //     const filtered = carsData.filter((car) => {
    //         const priceInRange =
    //             car.price >= filters.priceMin &&
    //             car.price <= filters.priceMax;
    //         const yearInRange =
    //             car.year >= filters.yearMin &&
    //             car.year <= filters.yearMax;
    //         const kilometersInRange =
    //             car.kilometers >= filters.kilometersMin &&
    //             car.kilometers <= filters.kilometersMax;
    //         const powerInRange =
    //             car.puissance >= filters.powerMin &&
    //             car.puissance <= filters.powerMax;
    //         const brandMatches =
    //             filters.brand === "" || car.brand === filters.brand;

    //         return (
    //             priceInRange &&
    //             yearInRange &&
    //             kilometersInRange &&
    //             powerInRange &&
    //             brandMatches
    //         );
    //     });
    //     setFilteredCars(filtered);
    // };

    return (
        <div className="flex flex-wrap gap-6 xs:justify-center md:justify-normal ">
            {loading ? (
                <p className="w-full text-center text-2xl text-red-02 mt-6 bg-red-300 rounded-md py-2 px-5 border-2 border-red-02 md:mt-0 md:h-fit">
                    Chargement des véhicules...
                </p>
            ) : carsData.length === 0 ? (
                <p className="w-full text-center text-2xl text-red-02 mt-6 bg-red-300 rounded-md py-2 px-5 border-2 border-red-02">
                    Aucun véhicule à afficher
                </p>
            ) : (
                carsData.map((car) => <CarCard key={car.immat} car={car} />)
            )}
        </div>
    );
};

export default CarsGallery;
