import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import EmployeeList from "../../../../components/EmployeeList/EmployeeList";
import AddEmployee from "../../../../components/Modals/AddEmployee";
import FindEmployee from "../../../../components/Modals/FindEmployee";

const EmployeesSettings = () => {
    const [modalType, setModalType] = useState(null);

    const openModal = (type) => {
        setModalType(type);
    };

    const closeModal = () => {
        setModalType(null);
    };

    useEffect(() => {
        if (modalType) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modalType]);

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
                <div className="mt-4 grid lg:grid-cols-2 gap-2">
                    <Button
                        name={"Ajouter un employé"}
                        fn={() => openModal("addEmployee")}
                    />
                    <Button name={"Chercher un employé"} fn={() => openModal("findEmployee")} />
                </div>
            </section>
            <section className=" mt-10">
                <EmployeeList />
            </section>
            {modalType === "addEmployee" && (
                <AddEmployee toggleModal={closeModal} />
            )}
            {modalType === "findEmployee" && (
                <FindEmployee toggleModal={closeModal} />
            )}
        </main>
    );
};

export default EmployeesSettings;
