import axios from "axios";

const interaptor = axios.create({
    baseURL: "https://localhost:5000",
})

export default interaptor