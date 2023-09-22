import { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import Axios from "../../../../api/axios";
import AddPlanningForm from "../../../../components/AddPlanningForm/AddPlanningForm";
import Pagination from "../../../../components/Pagination/Pagination";
import PlanningModal from "../../../../components/Modals/PlanningModal";

//Component to display the global settings
const GlobalSettings = () => {
    const [plannings, setPlannings] = useState([]);
    const [selectedPlanning, setSelectedPlanning] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [planningPerPage] = useState(5);

    // Pagination
    const indexOfLastPlanning = currentPage * planningPerPage;
    const indexOfFirstPlanning = indexOfLastPlanning - planningPerPage;
    const currentPlannings = plannings.slice(
        indexOfFirstPlanning,
        indexOfLastPlanning
    );

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        // Get the plannings data from the back
        const getPlanningsDataFromBack = async () => {
            try {
                const res = await Axios.get("/api/plannings");
                if (res.status === 200) {
                    console.log(
                        res.data,
                        "Les données ont bien été récupérées"
                    );
                } else {
                    console.error(res, "Une erreur est survenue");
                }

                // Sort the plannings by day
                const data = res.data;
                const indexJours = {
                    Lundi: 1,
                    Mardi: 2,
                    Mercredi: 3,
                    Jeudi: 4,
                    Vendredi: 5,
                    Samedi: 6,
                    Dimanche: 7,
                    Fériés: 8
                };
                data.sort((a, b) => indexJours[a.day] - indexJours[b.day])
                
                // Set the plannings
                setPlannings(data);
            } catch (error) {
                console.error("Une erreur est survenue", error);
            }
        };
        getPlanningsDataFromBack();
    }, []);

    const openPlanning = (planning) => {
        setSelectedPlanning(planning);
    };
    const closePlanning = () => {
        setSelectedPlanning(null);
    };

    // Add a planning to the list
    const addPlanningToList = (newPlanning) => {
        console.log(newPlanning);
        setPlannings((prevPlannings) => [...prevPlannings, newPlanning]);
        console.log("Ajout d'un nouveau planning: ", newPlanning);
    };

    // Update a planning in the list
    const updatePlanningInList = (updatedPlanning) => {
        console.log(updatedPlanning);
        const updatedPlannings = plannings.map((planning) => {
            return planning.id === updatedPlanning.id ? {...planning, ...updatedPlanning} : planning;
        }
        );
        setPlannings(updatedPlannings);
        console.log("Mise à jour du planning: ", updatedPlanning);
    };

    // Delete a planning in the list
    const handlePlanningDeletationModal = async (planning) => { 
        try {
            const res = await Axios.delete(`/api/plannings/${planning.id}`);
            if (res) {
                const updatedPlannings = plannings.filter((p) => p.id !== planning.id);
                setPlannings(updatedPlannings);
                setSelectedPlanning(null);
                alert("Le planning a bien été supprimé");
                console.log("Le planning a bien été supprimé");
            } else {
                console.error("Une erreur est survenue");
            }
        } catch (error) {
            console.error("Une erreur est survenue", error);
        }
    }
            
    return (
        <main className="container mx-auto px-24 lg:px-16 py-5 text-white">
            <h1 className="text-center text-2xl text-yellow-02 underline my-6 sm:text-3xl lg:text-5xl decoration-red-02">
                Gestion globale
            </h1>
            <section className="mt-10">
                <h2 className="text-lg text-yellow-02 underline decoration-red-02 my-6 lg:text-2xl">
                    Gestion des horaires d&apos;ouverture
                </h2>
                <div className="mt-10 p-4 bg-white text-black-02 w-full min-w-fit lg:w-3/5 rounded-md">
                    <h3 className="text-lg text-center font-bold mb-4">
                        Ajouter un horaire d&apos;ouverture
                    </h3>
                    <AddPlanningForm addPlanningToList={addPlanningToList}/>
                </div>
            </section>
            <section className="mt-10">
                <div className="overflow-x-auto rounded-md">
                    <table className="min-w-full divide-y divide-red-02 bg-yellow-02">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Action
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Jour
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Ouverture du matin
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Fermeture du matin
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Ouverture de l&apos;après-midi
                                </th>
                                <th className="py-3 px-6 text-left text-lg font-medium text-black-02 tracking-wider font-racer">
                                    Fermeture de l&apos;après-midi
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-red-02">
                            {currentPlannings.map((planning) => {
                                return (
                                    <tr
                                        key={planning.id}
                                        className="hover:bg-red-02/50"
                                    >
                                        <td className="py-4 px-6 whitespace-nowrap">
                                            <Button
                                                name="Lire"
                                                fn={() =>
                                                    openPlanning(planning)
                                                }
                                            />
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {planning.day}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {planning.morningOpeningHour}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {planning.morningClosingHour}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {planning.afternoonOpeningHour}
                                        </td>
                                        <td className="py-4 px-6 whitespace-nowrap font-semibold text-black-02">
                                            {planning.afternoonClosingHour}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {selectedPlanning && (
                        <PlanningModal
                            planning={selectedPlanning}
                            onClose={closePlanning}
                            updatePlanningInList={updatePlanningInList}
                            handlePlanningDeletationModal={handlePlanningDeletationModal}
                        />
                    )}
                </div>

            </section>
            <Pagination
                itemsPerPage={planningPerPage}
                totalItems={plannings.length}
                paginate={paginate}
            />
        </main>
    );
};

export default GlobalSettings;
