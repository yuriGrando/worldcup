import {requests} from "src/api/api";

export const ActionDoLogin = ({dispatch}, payload) => {
  console.log(payload)
    return requests.post('user/login', payload);
}

export const ActionGetMatch = ({dispatch}, payload) => {
  return requests.get('match');
}

export const ActionGetStandings = ({dispatch}, payload) => {
  return requests.get('standings');
}

export const ActionGetTeam = ({dispatch}, payload) => {
  return requests.get('team');
}




