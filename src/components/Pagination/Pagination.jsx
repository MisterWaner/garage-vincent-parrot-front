/* eslint-disable react/prop-types */
import { useState } from "react";

//Component to display a pagination
const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [currentPage, setCurrentPage] = useState(1);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
        paginate(pageNumber);
    };

    return (
        <div className="flex justify-center mt-5">
            <nav>
                <ul className="flex items-center">
                    {pageNumbers.map((pageNumber) => (
                        <li key={pageNumber}>
                            <button
                                className={`bg-yellow-02 text-black-02 px-2 py-1 rounded-md mx-1 ${
                                    currentPage === pageNumber
                                        ? "font-bold"
                                        : ""
                                } hover:bg-red-02`}
                                onClick={() => handleClick(pageNumber)}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
