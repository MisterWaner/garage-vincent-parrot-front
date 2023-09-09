/* eslint-disable react/prop-types */
import { useFilter } from "../../context/FilterContext";
import CarCard from "../CarCard/CarCard";

const CarsGallery = ({ cars }) => {
    const { filters } = useFilter();

    const filteredCars = cars.filter((car) => {
        const {
            priceMin,
            priceMax,
            yearMin,
            yearMax,
            kilometersMin,
            kilometersMax,
            powerMin,
            powerMax,
            brand,
        } = filters;

        const passesPriceFilter =
            (priceMin === "" || car.price >= parseInt(priceMin)) &&
            (priceMax === "" || car.price <= parseInt(priceMax));
        const passesYearFilter =
            (yearMin === "" || car.year >= parseInt(yearMin)) &&
            (yearMax === "" || car.year <= parseInt(yearMax));
        const passesKilometersFilter =
            (kilometersMin === "" ||
                car.kilometers >= parseInt(kilometersMin)) &&
            (kilometersMax === "" || car.kilometers <= parseInt(kilometersMax));
        const passesPowerFilter =
            (powerMin === "" || car.puissance >= parseInt(powerMin)) &&
            (powerMax === "" || car.puissance <= parseInt(powerMax));
        const passesBrandFilter =
            brand === "" || car.brand.toLowerCase().includes(brand.toLowerCase());

        return (
            passesPriceFilter &&
            passesYearFilter &&
            passesKilometersFilter &&
            passesPowerFilter &&
            passesBrandFilter
        );
    });
    
  

    if (filteredCars.length === 0) {
        return (
            <p className="text-center text-red-02 bg-red-300 px-5 py-2">
                Aucun véhicule ne correspond à vos critères
            </p>
        );
    }
    return (
        <div className="flex flex-wrap gap-6 justify-center lg:justify-normal">
            {filteredCars.length === cars.length
                ? cars.map((car) => (
                    <CarCard key={car.immat} car={car} />
                ))
                : filteredCars.map((car) => (
                    <CarCard key={car.immat} car={car} />
                ))
            }
        </div>
    );
};

export default CarsGallery;
