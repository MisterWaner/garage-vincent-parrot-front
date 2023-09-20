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

const deleteUserDataFromBack = async (userId) => {
    try {
        const res = await Axios.delete(`/api/users/${userId}`);
        console.log(res.status);
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
}

const deleteMailDataFromBack = async (mailId) => {
    try {
        const res = await Axios.delete(`/api/mails/${mailId}`);
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
}

const deleteReviewDataFromBack = async (reviewId) => {
    try {
        const res = await Axios.delete(`/api/reviews/${reviewId}`);
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
}

const deletePlanningDataFromBack = async (planningId) => {
    try {
        const res = await Axios.delete(`/api/plannings/${planningId}`);
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
}

export { deleteCarDataFromBack, deleteUserDataFromBack, deleteMailDataFromBack, deleteReviewDataFromBack, deletePlanningDataFromBack };
