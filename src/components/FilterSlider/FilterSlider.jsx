/* eslint-disable react/prop-types */
import { Slider } from "@mui/material";
import { useState } from "react";

const FilterSlider = ({ id, label, min, max, step, marks }) => {
    const [value, setValue] = useState([min, max]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id={id} className="grid grid-cols-1 grid-rows-4 w-full md:w-1/2 md:mx-auto">
            <div className="self-center">
                <span className="font-bold">{label} :</span>
            </div>
            <div className=" self-center flex justify-between">
                <span>{value[0]}</span>
                <span>{value[1]}</span>
            </div>
            <Slider
                className="self-center"
                getAriaLabel={() => label}
                value={value}
                onChange={handleSliderChange}
                min={min}
                max={max}
                step={step}
                marks={marks}
            />
        </div>
    );
};

export default FilterSlider;
