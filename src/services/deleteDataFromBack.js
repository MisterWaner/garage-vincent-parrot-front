import Axios from "../api/axios";

const deleteCarDataFromBack = async (carId) => {
    try {
        const res = await Axios.delete(`/api/cars/${carId}`);
        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
            return true;
        } else {
            console.error(res, "Une erreur est SURVENUE");
            throw new Error("Les données n'ont pas pu être envoyées");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export { deleteCarDataFromBack };
