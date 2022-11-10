import axios from 'axios';
import {authOptions} from "src/api/apikey-token";

// ====== API COPA DO MUNDO =======
export const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "*"
  }
});

//====== REQUEST CONFIGURAÇÕES ======
export const requests = {

  get: (url) =>
    instance.get(url, authOptions()),

  post: (url, body) =>
    instance.post(url, body, authOptions()),

}
