/* eslint-disable react/prop-types */
import { Slider } from "@material-tailwind/react";

const FilterSlider = ({ id, min, max, step, value, label, onChange }) => {
    return (
        <div className="w-full grid grid-cols-5 ">
            <label htmlFor={id}>{label}: </label>
            <Slider
                id={id}
                min={min}
                max={max}
                color="red"
                step={step}
                value={value}
                className="w-3/4 col-span-3"
                size="md"
                onChange={onChange}
            />
            <span>
                {value[0] === min && value[1] === max
                    ? "Aucun filtre"
                    : `Min: ${value[0]} - Max: ${value[1]}`
                }
            </span>
        </div>
    );
};

export default FilterSlider;
