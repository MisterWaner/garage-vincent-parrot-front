import cars from "./CarData";

const CarList = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                <thead>
                    <tr>
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
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-red-02">
                    {cars.map((car) => (
                        <tr key={car.id}>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{car.name}</td>
                            <td className="py-4 px-6 whitespace-nowrap"><img src={car.image} alt="" className="w-32 rounded-lg" /></td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{car.brand}</td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{car.model}</td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{car.year}</td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">{car.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CarList;
