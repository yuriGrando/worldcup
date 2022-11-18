import {requests} from "src/api/api";

export const ActionGetMatch = ({dispatch}, payload) => {
    return requests.get(`newsapi/top-headlines?q=${payload}&language=pt&country=br&category=sports`);
}




