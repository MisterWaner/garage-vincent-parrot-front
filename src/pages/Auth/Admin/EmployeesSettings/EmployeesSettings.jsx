import { useState } from "react";
import Button from "../../../../components/Button/Button";
import AddEmployee from "../../../../components/Modals/AddEmployee";
import EmployeeModal from "../../../../components/Modals/EmployeeModal";
import { employees } from "../../../../components/EmployeeList/EmployeeData";

const EmployeesSettings = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [searchResults, setSearchResults] = useState("");
    


    const openModal = () => {
        setToggleModal(true);
    };

    const closeModal = () => {
        setToggleModal(false);
    };

    const openEmployee = (employee) => {
        setSelectedEmployee(employee);
    };

    const closeEmployee = () => {
        setSelectedEmployee(null);
    };

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des employés
            </h1>
            <section className="mt-10">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti laborum vel sit suscipit iusto magnam eius fuga
                    obcaecati dolorum optio.
                </p>
                <div className="mt-4 w-1/3">
                    
                        <div className="flex flex-col mb-4 w-full">
                            <label htmlFor="search">Rechercher</label>
                            <input
                                type="search"
                                name="search"
                                id="search"
                                onChange={(e) =>
                                    setSearchResults(e.target.value)
                                }
                                className="bg-yellow-02 rounded-sm text-black-02 p-2"
                                placeholder="Rechercher un employé"
                            />
                        </div>
                    
                    <Button
                        name={"Ajouter un employé"}
                        fn={() => openModal()}
                    />
                </div>
            </section>
            <section className=" mt-10">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                        <thead>
                            <tr>
                                <th></th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Prénom
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Nom
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Email
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Service
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-02">
                            {employees
                                .filter((employee) => {
                                    return searchResults.toLowerCase() === ""
                                        ? employee
                                        : employee.firstname
                                              .toLowerCase()
                                              .includes(searchResults);
                                })
                                .map((employee, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-red-02/50"
                                    >
                                        <td className="py-4 px-6 whitespace-nowrap">
                                            <Button
                                                name="Voir la fiche"
                                                fn={() =>
                                                    openEmployee(employee)
                                                }
                                            />
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {employee.firstname}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {employee.lastname}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {employee.email}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {employee.service}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {selectedEmployee && (
                        <EmployeeModal
                            employee={selectedEmployee}
                            onClose={closeEmployee}
                        />
                    )}
                </div>
            </section>
            {toggleModal && <AddEmployee toggleModal={closeModal} />}
        </main>
    );
};

export default EmployeesSettings;
