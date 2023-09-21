import { useState, useEffect } from "react";
import Axios from "../../../api/axios";
import CarsGallery from "../../../components/CarsGallery/CarsGallery";
import CarFilter from "../../../components/CarFilter/CarFilter";

// Component to display the cars
const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

    // Get the cars data from the back
    const getCarsDataFromBack = async () => {
        try {
            const res = await Axios.get("/api/cars");
            if (res.status === 200) {
                console.log("Données récupérées :", res.data);
            } else {
                console.error(res, "Une erreur est SURVENUE");
            }
            setCars(res.data);
            setFilteredCars(res.data);
        } catch (error) {
            console.error("Erreur lors de la récupération des données", error);
        }
    };

    useEffect(() => {
        getCarsDataFromBack();
    }, []);

    // Function to filter the cars
    const filterCars = (appliedFilters) => {
        console.log("Critères de filtrage :", appliedFilters);
        const filtered = cars.filter((car) => {
            return (
                car.price >= appliedFilters.priceRange[0] &&
                car.price <= appliedFilters.priceRange[1] &&
                car.year >= appliedFilters.yearRange[0] &&
                car.year <= appliedFilters.yearRange[1] &&
                car.kilometers >= appliedFilters.kilometersRange[0] &&
                car.kilometers <= appliedFilters.kilometersRange[1] &&
                car.puissance >= appliedFilters.powerRange[0] &&
                car.puissance <= appliedFilters.powerRange[1] &&
                (appliedFilters.brand === "" || car.brand === appliedFilters.brand)
            );
        });
        console.log(appliedFilters, "Les critères de filtrage après filtrage");
        console.log("Nombres de véhicules filtrés :", filtered.length);
        setFilteredCars(filtered);
        console.log(filtered, "Les véhicules filtrés");
    };

    // Function to reset the filters
    const resetFilters = () => {
        setFilteredCars(cars);
    };

    return (
        <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Notre parc automobile
            </h1>
            <section className="py-14 md:flex gap-6">
                <CarFilter
                    filterCars={filterCars}
                    resetFilters={resetFilters}
                />
                <CarsGallery cars={filteredCars} />
            </section>
        </main>
    );
};

export default Cars;
