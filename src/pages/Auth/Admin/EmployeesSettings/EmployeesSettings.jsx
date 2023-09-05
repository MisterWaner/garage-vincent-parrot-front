/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import AddUser from "../../../../components/Modals/AddUser";
import UserModal from "../../../../components/Modals/UserModal";
import Axios from "../../../../api/axios";
import { deleteUserDataFromBack } from "../../../../services/deleteDataFromBack";

const EmployeesSettings = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchResults, setSearchResults] = useState("");
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(10);

    const getUsersForCurrentPage = () => {
        const indexOfLastUser = currentPage * userPerPage;
        const indexOfFirstUser = indexOfLastUser - userPerPage;
        return users.slice(indexOfFirstUser, indexOfLastUser);
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

    const openUser = (user) => {
        setSelectedUser(user);
    };

    const closeUser = () => {
        setSelectedUser(null);
    };

    useEffect(() => {
        const getUsersDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/users");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                setUsers(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };

        getUsersDataFromBack();
    }, []);

    const addNewUsersToList = (newUser) => {
        setUsers((prevUsers) => [...prevUsers, newUser]);
        console.log("Ajout d'un nouvel employé : ", newUser);
    };

    const updateUserInList = (updatedUser) => {
        console.log(updatedUser);
        const updatedUsers = users.map((user) => {
            return user.id === updatedUser.id
                ? { ...user, ...updatedUser }
                : user;
        });
        console.log(updatedUsers);
        setUsers(updatedUsers);
    };

    const handleUserDeletionModal = async (user) => {
        try {
            const res = await deleteUserDataFromBack(user.id);
            if (res) {
                const updatedUsers = users.filter(
                    (u) => u.id !== user.id
                );
                setUsers(updatedUsers);
                setSelectedUser(null);
                alert("L'utilisateur a bien été supprimé");
                console.log("L'utilisateur a bien été supprimé");
            } else {
                console.error(res, "Une erreur est SURVENUE");
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    }

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
                            placeholder="Rechercher un utilisateur"
                        />
                    </div>

                    <Button
                        name={"Ajouter un utilisateur"}
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
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Rôle
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-02">
                            {getUsersForCurrentPage()
                                .filter((user) => {
                                    return searchResults.toLowerCase() === ""
                                        ? user
                                        : user.firstname
                                              .toLowerCase()
                                              .includes(searchResults);
                                })
                                .map((user, index) => (
                                    <tr
                                        key={index}
                                        className="hover:bg-red-02/50"
                                    >
                                        <td className="py-4 px-6 whitespace-nowrap">
                                            <Button
                                                name="Voir la fiche"
                                                fn={() =>
                                                    openUser(user)
                                                }
                                            />
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {user.firstname}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {user.lastname}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {user.email}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {user.services}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {(user.roleId === 1) ? "Admin" : "Employé"}
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                    {selectedUser && (
                        <UserModal
                            user={selectedUser}
                            onClose={closeUser}
                            updateUserInList={updateUserInList}
                            handleEmployeeDeletionModal={handleUserDeletionModal}
                        />
                    )}
                </div>
                <div className="flex justify-center mt-5">
                    <nav>
                        <ul className="flex items-center">
                            {Array.from(
                                {
                                    length: Math.ceil(
                                        users.length / userPerPage
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
                <AddUser
                    toggleModal={closeModal}
                    addUserToList={addNewUsersToList}
                />
            )}
        </main>
    );
};

export default EmployeesSettings;
