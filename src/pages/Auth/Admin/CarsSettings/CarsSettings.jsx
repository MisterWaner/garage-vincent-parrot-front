import { useState, useEffect } from "react";
import CarModal from "../../../../components/Modals/CarModal.jsx";
import AddCar from "../../../../components/Modals/AddCar.jsx";
import Pagination from "../../../../components/Pagination/Pagination.jsx";
import Button from "../../../../components/Button/Button";
import Axios from "../../../../api/axios.js";
import { deleteCarDataFromBack } from "../../../../services/deleteDataFromBack.js";

//Component to display the car settings page
const CarsSettings = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [selectedCar, setSelectedCar] = useState(null);
    const [searchResults, setSearchResults] = useState("");
    const [cars, setCars] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(5);

    // Pagination
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const openModal = () => {
        setToggleModal(true);
    };
    const closeModal = () => {
        setToggleModal(false);
    };

    const openCar = (car) => {
        setSelectedCar(car);
    };
    const closeCar = () => {
        setSelectedCar(null);
    };

    useEffect(() => {
        //Get the cars data from the back
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
                //Set the cars data in the state
                setCars(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        getCarsDataFromBack();
    }, []);

    //Function to add a new car to the list
    const addNewCarToList = (newCar) => {
        setCars((prevCars) => [...prevCars, newCar]);
        console.log("Ajout d'un nouveau véhicule : ", newCar);
    };

    //Function to update a car in the list
    const updtateCarInList = (updatedCar) => {
        const updatedCars = cars.map((car) => {
            return car.immat === updatedCar.immat
                ? { ...car, ...updatedCar }
                : car;
        });
        setCars(updatedCars);
    };

    //Function to delete a car in the list
    const handleCarDeletionModal = async (car) => {
        try {
            const res = await deleteCarDataFromBack(car.immat);
            if (res) {
                const updatedCars = cars.filter((c) => c.immat !== car.immat);
                setCars(updatedCars);
                setSelectedCar(null);
                alert("Le véhicule a bien été supprimé");
                console.log("Le véhicule a bien été supprimé");
            } else {
                console.error(res, "Une erreur est SURVENUE");
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    };

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des véhicules
            </h1>
            <section className="mt-10">
                <p className="w-full text-sm md:text-base">Il y a actuellement {cars.length} véhicules en stock.</p>
                <div className="mt-4 w-2/3 md:w-1/3">
                    <div className="flex flex-col mb-4 w-full">
                        <label className="w-full text-sm md:text-base" htmlFor="search">Rechercher</label>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            onChange={(e) => setSearchResults(e.target.value)}
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            placeholder="Rechercher un véhicule"
                        />
                    </div>

                    <Button
                        name={"Ajouter un véhicule"}
                        fn={() => openModal()}
                    />
                </div>
            </section>
            <section className=" mt-10">
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Action
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Immatriculation
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Image
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Marque
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Model
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Année
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Couleur
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Prix
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-02">
                            {currentCars
                                .filter((car) => {
                                    return searchResults.toLowerCase() === ""
                                        ? car
                                        : car.brand
                                              .toLowerCase()
                                              .includes(searchResults);
                                })
                                .map((car, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-red-02/50"
                                    >
                                        <td className="py-4 px-6 whitespace-nowrap">
                                            <Button
                                                name="Voir la fiche"
                                                fn={() => openCar(car)}
                                            />
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {car.immat}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap">
                                            <img
                                                src={car.image}
                                                alt=""
                                                className="w-32 rounded-lg"
                                            />
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {car.brand}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {car.model}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {car.year}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {car.color}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {car.price}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    {selectedCar && (
                        <CarModal
                            car={selectedCar}
                            onClose={closeCar}
                            updateCarInList={updtateCarInList}
                            handleCarDeletionModal={handleCarDeletionModal}
                        />
                    )}
                </div>
            </section>
            <Pagination
                itemsPerPage={carsPerPage}
                totalItems={cars.length}
                paginate={paginate}
            />
            {toggleModal && (
                <AddCar
                    toggleModal={closeModal}
                    addCarToList={addNewCarToList}
                />
            )}
        </main>
    );
};

export default CarsSettings;
