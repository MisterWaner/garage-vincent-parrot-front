/* eslint-disable react/prop-types */
import Button from "../Button/Button";

const EmployeeModal = ({ employee, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg w-1/3 text-black-02">
                <h2 className="text-lg font-bold mb-4">{employee.name}</h2>
                <p>{employee.service}</p>
                <Button name="Fermer" fn={onClose} />
            </div>
        </div>
    );
};

export default EmployeeModal;
