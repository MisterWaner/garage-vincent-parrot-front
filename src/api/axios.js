import axios from "axios";

const BASE_URL = "https://garage-vincent-parrot-back-production.up.railway.app";

const Axios = axios.create({
    baseURL: BASE_URL,
});

export default Axios;
