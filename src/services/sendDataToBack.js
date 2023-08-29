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
            console.error(res, "Une erreur est survenue");
        }
        return res.data;
    } catch (error) {
        console.error("Une erreur est survenue", error);
    }
};

const sendEmployeesDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/users/employees", formData, {
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (res.status === 201) {
            console.log(res.data, "Les données ont bien été envoyées");
        } else {
            console.log(res.data, "Une erreur est SURVENUE");
        }
        return res.data;
    } catch (error) {
        console.log("Une erreur est survenue", error);
    }
}

export { sendCarsDataToBack, sendEmployeesDataToBack };