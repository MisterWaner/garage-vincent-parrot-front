import Axios from "../api/axios";

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
            throw new Error("Une erreur est survenue lors de l'envoie du message");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
        throw error;
    }
}

export { sendCarsDataToBack, sendUsersDataToBack, sendMailDataToBack };
