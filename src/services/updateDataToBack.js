import Axios from "../api/axios";

const updateCarsDataToBack = async (carId, formData) => {
    try {
        const res = await Axios.put(`/api/cars/${carId}`, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
        } else {
            console.error(res, "Une erreur est SURVENUE");
            throw new Error("Les données n'ont pas pu être envoyées");
        }
        return res.data;
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

const updateUserEmployeesDataToBack = async (userId, formData) => {
    try {
        const res = await Axios.put(`/api/users/${userId}`, formData, {
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
        } else {
            console.error(res, "Une erreur est SURVENUE");
            throw new Error("Les données n'ont pas pu être envoyées");
        }
        return res.data;
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}
export { updateCarsDataToBack, updateUserEmployeesDataToBack };