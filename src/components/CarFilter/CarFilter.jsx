/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterSlider from "../FilterSlider/FilterSlider";
import Button from "../Button/Button";

//Car filter component to filter the cars in the cars page
const CarFilter = ({ filterCars, resetFilters }) => {
    const [filters, setFilters] = useState({
        priceRange: [0, 300000],
        yearRange: [1960, 2022],
        kilometersRange: [0, 300000],
        powerRange: [100, 500],
        brand: "",
    });

    const applyFilters = () => {
        filterCars(filters);
    };

    const handleSliderChange = (event, newValue, filterName) => {
        setFilters({
            ...filters,
            [filterName]: newValue,
        });
    };

    const handleSelectChange = (event) => {
        setFilters({
            ...filters,
            brand: event.target.value,
        });
        applyFilters();
    };

    const reset = () => {
        setFilters({
            priceRange: [0, 300000],
            yearRange: [1960, 2022],
            kilometersRange: [0, 300000],
            powerRange: [100, 500],
            brand: "",
        });
        resetFilters();
    };

    return (
        <div className="w-full rounded-md flex flex-col gap-4 bg-white text-black-02 p-5 md:w-2/3 md:h-fit lg:gap-0 lg:w-1/3 text-sm md:text-base">
            <h2 className="text-2xl text-center">Filtrer les véhicules</h2>
            {/* Filtre par prix */}
            <FilterSlider
                id="priceRange"
                min={0}
                max={300000}
                value={filters.priceRange}
                step={1000}
                marks={true}
                onChange={(event, newValue) => {
                    handleSliderChange(event, newValue, "priceRange");
                }}
                label="Prix (en €)"
            />
            {/* Filtre par année */}
            <FilterSlider
                id="yearRange"
                min={1960}
                max={2022}
                step={1}
                value={filters.yearRange}
                marks={true}
                onChange={(event, newValue) => {
                    handleSliderChange(event, newValue, "yearRange");
                }}
                label="Année"
            />
            {/* Filtre par kilomètres */}
            <FilterSlider
                id="kilometersRange"
                min={0}
                max={300000}
                step={1000}
                marks={true}
                value={filters.kilometersRange}
                onChange={(event, newValue) => {
                    handleSliderChange(event, newValue, "kilometersRange");
                }}
                label="Kilomètres"
            />
            {/* Filtre par puissance */}
            <FilterSlider
                id="powerRange"
                min={100}
                max={500}
                step={50}
                value={filters.powerRange}
                marks={true}
                onChange={(event, newValue) => {
                    handleSliderChange(event, newValue, "powerRange");
                }}
                label="Puissance"
            />
            {/* Filtre par marque */}
            <div className="grid grid-cols-1 grid-rows-2 w-full md:w-2/3 md:mx-auto">
                <label className="font-bold" htmlFor="brand">
                    Marque:
                </label>
                <select
                    className="bg-yellow-02 p-2 rounded-md "
                    name="brand"
                    id="brand"
                    value={filters.brand}
                    onChange={handleSelectChange}
                >
                    <option value="">Toutes les marques</option>
                    <option value="Alpine">Alpine</option>
                    <option value="Aston-Martin">Aston-Martin</option>
                    <option value="Audi">Audi</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Dodge">Dodge</option>
                    <option value="Plymouth">Plymouth</option>
                    <option value="Pontiac">Pontiac</option>
                    <option value="Porsche">Porsche</option>
                    <option value="Shelby">Shelby</option>
                    <option value="Subaru">Subaru</option>
                </select>
            </div>
            <div className="w-full mt-4">
                <div className="sm:flex sm:gap-4">
                    <Button name="Filtrer" fn={applyFilters} />
                    <Button name="Réinitialiser" fn={reset} />
                </div>
            </div>
        </div>
    );
};

export default CarFilter;
