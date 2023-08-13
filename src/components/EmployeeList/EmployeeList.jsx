import { useState } from "react";

import EmployeeModal from "../Modals/EmployeeModal";
import Button from "../Button/Button";
import employees from "./EmployeeData";

const EmployeeList = () => {
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    const openModal = (employee) => {
        setSelectedEmployee(employee);
    };

    const closeModal = () => {
        setSelectedEmployee(null);
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
                            Prénom
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
                    {employees.map((employee) => (
                        <tr key={employee.id} className="hover:bg-red-02/50">
                            <td className="py-4 px-6 whitespace-nowrap">
                                <Button
                                    name="Voir la fiche"
                                    fn={() => openModal(employee)}
                                />
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                {employee.firstname}
                            </td>
                            <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                {employee.name}
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
                    onClose={closeModal}
                />
            )}
        </div>
    );
};

export default EmployeeList;
