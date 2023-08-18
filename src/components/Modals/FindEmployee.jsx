import { useState } from "react";

import Button from "../Button/Button";
import { XCircleIcon } from "@heroicons/react/24/solid";

// eslint-disable-next-line react/prop-types
const FindEmployee = ({ toggleModal, onSearch }) => {
    const [search, setSearch] = useState("");

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black-02 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg w-1/3 text-black-02">
                <div className="w-full flex justify-end">
                    <button
                        onClick={toggleModal}
                        className="w-10 text-red-02 transition duration-200 active:scale-[0.95]"
                    >
                        <XCircleIcon />
                    </button>
                </div>
                <h2 className="text-lg font-bold mb-4">Chercher un employé</h2>
                <form
                    action=""
                    className="w-full h-full flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:items-start "
                >
                    <div className="flex flex-col mb-4 w-full">
                        <label htmlFor="search">Rechercher</label>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            onChange={handleInputChange}
                            className="bg-yellow-02 rounded-sm text-black-02 p-2"
                            value={search}
                            placeholder="Rechercher un employé"
                        />
                    </div>
                    <div className="flex flex-col mb-4 w-full col-span-2">
                        <Button name="Rechercher" onSubmit={handleSubmit} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FindEmployee;
