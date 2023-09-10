

import CarsGallery from "../../../components/CarsGallery/CarsGallery";
import CarFilter from "../../../components/CarFilter/CarFilter";
import { FilterProvider } from "../../../context/FilterContext";

const Cars = () => {
    
    return (
        <FilterProvider>
            <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
                <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                    Notre parc automobile
                </h1>
                <section className="py-14">
                    <CarFilter  />
                    <CarsGallery  />
                </section>
            </main>
        </FilterProvider>
    );
};

export default Cars;
