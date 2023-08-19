import { useEffect } from "react";

/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";


const EmployeeModal = ({ employee, onClose }) => {

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-3/5 text-black-02 lg:w-1/2">
            <div className="w-full flex justify-end">
                    <button
                        onClick={onClose}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">{employee.firstname + " " + employee.lastname}</h2>
                <p>{employee.service}</p>
                <div className="w-full flex flex-col lg:flex-row lg:gap-2 ">
                    <Button name="Modifier" fn={onClose} />
                    <Button name="Supprimer" fn={onClose} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeModal;
