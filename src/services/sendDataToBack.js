import Axios from "../api/axios";

//Fonction to send car data to back
const sendCarsDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/cars", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
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

//Fonction to send user data to back
const sendUsersDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/users", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);

        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
            return res.data;
        } else {
            throw new Error("Une erreur est survenue lors de la creation");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

//Fonction to send mail data to back
const sendMailDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/mails", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);

        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
            return res.data;
        } else {
            throw new Error(
                "Une erreur est survenue lors de l'envoie du message"
            );
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

//Fonction to send review data to back
const sendReviewDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/reviews", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);

        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
            return res.data;
        } else {
            throw new Error(
                "Une erreur est survenue lors de l'envoie du commentaire"
            );
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

//Fonction to send planning data to back
const sendPlanningDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/plannings", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);

        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
            return res.data;
        } else {
            throw new Error(
                "Une erreur est survenue lors de l'envoie du planning"
            );
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
};

export {
    sendCarsDataToBack,
    sendUsersDataToBack,
    sendMailDataToBack,
    sendReviewDataToBack,
    sendPlanningDataToBack,
};
