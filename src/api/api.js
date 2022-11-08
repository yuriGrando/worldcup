import axios from 'axios';
import {authOptions} from "src/api/apikey-token";

// ====== API COPA DO MUNDO =======
export const instance = axios.create({
  baseURL: "http://api.cup2022.ir/api/v1/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin" : "http://api.cup2022.ir/api/v1"
  }
});

//====== REQUEST CONFIGURAÇÕES ======
export const requests = {

  get: (url) =>
    instance.get(url, authOptions()),

  post: (url, body) =>
    instance.post(url, body, authOptions()),

}
