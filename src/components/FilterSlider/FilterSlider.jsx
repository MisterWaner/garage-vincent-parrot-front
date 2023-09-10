/* eslint-disable react/prop-types */
import { Slider, Typography, Grid } from "@mui/material";
import { useState } from "react";

const FilterSlider = ({ id, label, min, max, step, marks }) => {
    const [value, setValue] = useState([min, max]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div id={id}>
            <Grid container spacing={4} alignItems="center" flexGrow={1}>
                <Grid item xs>
                    <Typography>{label}:</Typography>
                </Grid>
                <Grid item xs>
                    <Typography>{value[0]}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Slider
                        color="secondary"
                        value={value}
                        onChange={handleSliderChange}
                        min={min}
                        max={max}
                        marks={marks}
                        step={step}
                    />
                </Grid>
                <Grid item xs>
                    <Typography>{value[1]}</Typography>
                </Grid>
            </Grid>

            
        </div>
    );
};

export default FilterSlider;
