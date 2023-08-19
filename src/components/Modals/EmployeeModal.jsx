import { useEffect } from "react";

/* eslint-disable react/prop-types */
import Button from "../Button/Button";


const EmployeeModal = ({ employee, onClose }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/3 text-black-02">
                <h2 className="text-lg font-bold mb-4">{employee.firstname + " " + employee.lastname}</h2>
                <p>{employee.service}</p>
                <Button name="Fermer" fn={onClose} />
            </div>
        </div>
    );
};

export default EmployeeModal;
