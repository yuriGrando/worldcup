import {requests} from "src/api/api";

export const ActionDoLogin = ({dispatch}, payload) => {
  console.log(payload)
    return requests.post('user/login', payload);
}




