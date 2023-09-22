/* eslint-disable react/prop-types */
import { Slider } from "@mui/material";

//Filter slider component to use in the car filter component
const FilterSlider = ({ id, label, min, max, step, value, onChange }) => {
    return (
        <div className="grid grid-cols-1 grid-rows-4 w-full md:w-1/2 md:mx-auto text-sm md:text-base">
            <div className="self-center">
                <span className="font-bold">{label} :</span>
            </div>
            <div className=" self-center flex justify-between">
                <span>{min}</span>
                <span>{max}</span>
            </div>
            <Slider
                id={id}
                className="self-center"
                getAriaLabel={() => label}
                value={value}
                onChange={onChange}
                min={min}
                max={max}
                step={step}
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default FilterSlider;
