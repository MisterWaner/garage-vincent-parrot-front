import { useState, useEffect } from "react";
import Axios from "../../../api/axios";
import CarsGallery from "../../../components/CarsGallery/CarsGallery";
import CarFilter from "../../../components/CarFilter/CarFilter";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [filteredCars, setFilteredCars] = useState([]);

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

                setCars(res.data);
                setFilteredCars(res.data);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données",
                    error
                );
            }
        };
        getCarsDataFromBack();
    }, []);

    const resetFilters = () => {
        setFilteredCars(cars);
    }

    console.log(cars);
    console.log(filteredCars);
    const handleFilterChange = (filters) => {
        let filtered = [...cars];
        console.log(filtered);
        console.log(filters);

        filtered = filtered.filter(
            (car) =>
                car.price >= filters.priceRange[0] &&
                car.price <= filters.priceRange[1]
        );
        filtered = filtered.filter(
            (car) => car.brand === filters.brand
        );
        filtered = filtered.filter(
            (car) =>
                car.year >= filters.yearRange[0] &&
                car.year <= filters.yearRange[1]
        );
        filtered = filtered.filter(
            (car) =>
                car.kilometers >= filters.kilometersRange[0] &&
                car.kilometers <= filters.kilometersRange[1]
        );
        filtered = filtered.filter(
            (car) =>
                car.puissance >= filters.powerRange[0] &&
                car.puissance <= filters.powerRange[1]
        );

        if (filters.brand !== "") {
            filtered = filtered.filter((car) => car.brand === filters.brand);
        }

        setFilteredCars(filtered);
        console.log(filtered);
        console.log(filteredCars);
    };

    return (
        <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Notre parc automobile
            </h1>
            <section className="py-14 md:flex gap-6">
                <CarFilter onFilterChange={handleFilterChange} onResetFilters={resetFilters} />
                <CarsGallery cars={filteredCars} />
            </section>
        </main>
    );
};

export default Cars;
