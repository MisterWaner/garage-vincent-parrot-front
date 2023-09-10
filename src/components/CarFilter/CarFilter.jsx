/* eslint-disable react/prop-types */
import FilterSlider from "../FilterSlider/FilterSlider";
import { useFilter } from "../../context/FilterContext";
import Button from "../Button/Button";

const CarFilter = ({filterCars}) => {
    const { filters, setFilters } = useFilter();
    console.log("filtre dans CarFilter", filters);

    const handleFilter = () => {
        filterCars()
    }

    const handleSliderChange = (filterKey, value) => {
        setFilters({
            ...filters,
            [filterKey]: value,
        });
    };

    const handleBrandChange = (event) => {
        setFilters({
            ...filters,
            brand: event.target.value,
        });
    };

    return (
        <div className="w-full rounded-md flex flex-col gap-4 bg-white text-black-02 p-5">
            <h2 className="text-2xl">Filtrer les véhicules</h2>
            {/* Filtre par prix */}
            <FilterSlider
                id="priceRange"
                min={0}
                max={300000}
                step={500}
                marks={true}
                onChange={(value) => handleSliderChange("price", value)}
                label="Prix"
            />
            {/* Filtre par année */}
            <FilterSlider
                id="yearRange"
                min={1960}
                max={2022}
                step={1}
                marks={true}
                onChange={(value) => handleSliderChange("year", value)}
                label="Année"
            />
            {/* Filtre par kilomètres */}
            <FilterSlider
                id="kilometersRange"
                min={0}
                max={300000}
                step={1000}
                marks={true}
                onChange={(value) => handleSliderChange("kilometers", value)}
                label="Kilomètres"
            />
            {/* Filtre par puissance */}
            <FilterSlider
                id="powerRange"
                min={100}
                max={500}
                step={50}
                marks={true}
                onChange={(value) => handleSliderChange("power", value)}
                label="Puissance"
            />
            {/* Filtre par marque */}
            <div>
                <label htmlFor="brand">Marque:</label>
                <select
                    name="brand"
                    id="brand"
                    value={filters.brand}
                    onChange={handleBrandChange}
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
            <div className="w-1/6">
                <Button name="Filtrer" fn={handleFilter} />
            </div>
        </div>
    );
};

export default CarFilter;
