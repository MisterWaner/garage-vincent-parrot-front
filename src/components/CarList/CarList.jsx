import { useState } from "react";
import Button from "../Button/Button";
import cars from "./CarData";
import CarModal from "../Modals/CarModal";

const CarList = () => {
    const [selectedCar, setSelectedCar] = useState(null);

    const openModal = (car) => {
        setSelectedCar(car);
    };

    const closeModal = () => {
        setSelectedCar(null);
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                <thead>
                    <tr>
                        <th></th>
                        <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                            Nom
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
                    {cars.map((car) => (
                        <tr key={car.id} className="hover:bg-red-02/50">
                            <td className="py-4 px-6 whitespace-nowrap">
                                <Button
                                    name="Voir la fiche"
                                    fn={() => openModal(car)}
                                />
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                {car.name}
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
                
                <CarModal car={selectedCar} onClose={closeModal} />
            )}
        </div>
    );
};

export default CarList;
