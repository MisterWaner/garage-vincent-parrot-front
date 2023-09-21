/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import AddUser from "../../../../components/Modals/AddUser";
import UserModal from "../../../../components/Modals/UserModal";
import Pagination from "../../../../components/Pagination/Pagination";
import Axios from "../../../../api/axios";
import { deleteUserDataFromBack } from "../../../../services/deleteDataFromBack";

//Component to display the employees settings page
const EmployeesSettings = () => {
    const [toggleModal, setToggleModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [searchResults, setSearchResults] = useState("");
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [userPerPage] = useState(5);

    // Pagination
    const indexOfLastUser = currentPage * userPerPage;
    const indexOfFirstUser = indexOfLastUser - userPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

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
        // Get users data from back
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

                // Set users data in state
                setUsers(res.data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };
        getUsersDataFromBack();
    }, []);

    // Add new user to list
    const addNewUserToList = (newUser) => {
        console.log(newUser);
        setUsers((prevUsers) => [...prevUsers, newUser]);
        console.log("Ajout d'un nouvel utilisateur : ", newUser);
    };

    // Update user in list
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

    // Delete user in list
    const handleUserDeletionModal = async (user) => {
        try {
            const res = await deleteUserDataFromBack(user.id);
            if (res) {
                const updatedUsers = users.filter((u) => u.id !== user.id);
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
    };

    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion des employés
            </h1>
            <section className="mt-10">
                <div>
                    <p>Sur cette page vous pouvez: </p>
                    <ul className="mt-4 list-inside list-disc">
                        <li className="px-4">
                            Créer un compte employé ou administrateur
                        </li>
                        <li className="px-4">
                            Gérer les compte existant (suppression,
                            modification, modification de droit...)
                        </li>
                        <li className="px-4">
                            Rechercher un compte précis grâce au prénom
                        </li>
                    </ul>
                </div>

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
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Action
                                </th>
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
                            {currentUsers
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
                                                fn={() => openUser(user)}
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
                                            {user.role === "Admin"
                                                ? "Admin"
                                                : "Utilisateur"}
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
                            handleUserDeletionModal={handleUserDeletionModal}
                        />
                    )}
                </div>
                
            </section>
            <Pagination
                itemsPerPage={userPerPage}
                totalItems={users.length}
                paginate={paginate}
            />
            {toggleModal && (
                <AddUser
                    toggleModal={closeModal}
                    addUserToList={addNewUserToList}
                />
            )}
        </main>
    );
};

export default EmployeesSettings;
