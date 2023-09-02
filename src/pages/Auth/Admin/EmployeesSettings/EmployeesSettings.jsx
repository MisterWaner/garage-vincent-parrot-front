/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import AddEmployee from "../../../../components/Modals/AddEmployee";
import EmployeeModal from "../../../../components/Modals/EmployeeModal";
import Axios from "../../../../api/axios";

const EmployeesSettings = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [searchResults, setSearchResults] = useState("");
    const [employees, setEmployees] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [employeePerPage] = useState(10);

    const getEmployeesForCurrentPage = () => {
        const indexOfLastEmployee = currentPage * employeePerPage;
        const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
        return employees.slice(indexOfFirstEmployee, indexOfLastEmployee);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
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

    useEffect(() => {
        const getEmployeesDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/users/employees");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                setEmployees(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        getEmployeesDataFromBack();
    }, []);

    const addNewEmployeeToList = (newEmployee) => {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
        console.log("Ajout d'un nouvel employé : ", newEmployee);
    };

    const updateEmployeeInList = (updatedEmployee) => {
        console.log(updatedEmployee);
        setEmployees((prevEmployees) => {
            return prevEmployees.map((employee) => {
                if (employee.id === updatedEmployee.id) {
                    return updatedEmployee;
                } else {
                    return employee;
                }
            });
        });
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
                <div className="mt-4 w-2/3 md:w-1/3">
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="search">Rechercher</label>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            onChange={(e) => setSearchResults(e.target.value)}
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
                            {getEmployeesForCurrentPage()
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
                                            {employee.services}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {selectedEmployee && (
                        <EmployeeModal
                            employee={selectedEmployee}
                            onClose={closeEmployee}
                            updateEmployeeInList={updateEmployeeInList}
                        />
                    )}
                </div>
                <div className="flex justify-center mt-5">
                    <nav>
                        <ul className="flex items-center">
                            {Array.from(
                                {
                                    length: Math.ceil(
                                        employees.length / employeePerPage
                                    ),
                                },
                                (_, index) => (
                                    <li key={index + 1}>
                                        <button
                                            className={`bg-yellow-02 text-black-02 px-2 py-1 rounded-md mx-1 ${
                                                currentPage === index + 1
                                                    ? "font-bold"
                                                    : ""
                                            } hover:bg-red-02`}
                                            onClick={() => paginate(index + 1)}
                                        >
                                            {index + 1}
                                        </button>
                                    </li>
                                )
                            )}
                        </ul>
                    </nav>
                </div>
            </section>
            {toggleModal && (
                <AddEmployee
                    toggleModal={closeModal}
                    addEmployeeToList={addNewEmployeeToList}
                />
            )}
        </main>
    );
};

export default EmployeesSettings;
