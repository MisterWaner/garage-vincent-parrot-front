import { useEffect, useState } from "react";
import Axios from "../../../api/axios";

import CarsGallery from "../../../components/CarsGallery/CarsGallery";
import CarFilter from "../../../components/CarFilter/CarFilter";
import { FilterProvider } from "../../../context/FilterContext";

const Cars = () => {
    const [carsData, setCarsData] = useState([]);
    const [loading, setLoading] = useState(true);

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

                setCarsData(res.data);
                setLoading(false);
            } catch (error) {
                console.error(
                    "Erreur lors de la récupération des données",
                    error
                );
                setLoading(false);
            }
        };

        getCarsDataFromBack();
    }, []);

    return (
        <FilterProvider>
            <main className="text-white max-w-[1440px] mx-auto mt-[160px] p-5">
                <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                    Notre parc automobile
                </h1>
                <section className="py-14">
                    {carsData.length === 0 ? (
                        <p className="text-center rounded-md text-red-02 text-2xl bg-red-300 px-5 py-2">
                            Aucun véhicule à afficher
                        </p>
                    ) : (
                        <>
                            <CarFilter />
                            {loading ? (
                                <p className="text-center text-red-02 text-2xl bg-red-300 px-5 py-2">
                                    Chargement des données...
                                </p>
                            ) : (
                                <CarsGallery cars={carsData} />
                            )}
                        </>
                    )}
                </section>
            </main>
        </FilterProvider>
    );
};

export default Cars;
