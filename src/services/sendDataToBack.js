import Axios from "../api/axios";

const sendCarsDataToBack = async (formData) => {
    try {
        const res = await Axios.post("/api/cars", formData);

        if (res.status === 200) {
            console.log(res.data, "Les données ont bien été envoyées");
        } else {
            console.error(res, "Une erreur est survenue");
        }
    } catch (error) {
        console.error("Une erreur est survenue", error);
    }
}

export default sendCarsDataToBack;