import axios from 'axios';
import {authOptions} from "src/api/apikey-token";

// ====== API URL =======
export const instance = axios.create({
    baseURL: "https://worldcup2022api.herokuapp.com",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});

//====== REQUEST CONFIGURAÇÕES ======
export const requests = {

    get: (url) =>
        instance.get(url),

    post: (url, body) =>
        instance.post(url, body, authOptions()),

}
