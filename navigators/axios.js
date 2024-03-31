import axios from "axios";

export const baseIP = '192.168.1.10:8000'
export const baseURL = `http://${baseIP}`
const api = axios.create({
    baseURL: baseURL,
})
export default api