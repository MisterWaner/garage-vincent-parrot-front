/* eslint-disable react/prop-types */

import { useState, createContext, useContext } from 'react';

export const FilterContext = createContext();

export const useFilter = () => {
    return useContext(FilterContext);
}

export const FilterProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        priceMin: '',
        priceMax: '',
        yearMin: '',
        yearMax: '',
        kilometersMin: '',
        kilometersMax: '',
        powerMin: '',
        powerMax: '',
        brand: ''
    });

    return (
        <FilterContext.Provider value={{ filters, setFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

