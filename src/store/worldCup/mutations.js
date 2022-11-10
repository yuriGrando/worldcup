export const SET_TOKEN = (state, payload) => {
    state.token = payload;
    localStorage.setItem('token', payload)
};

export const SET_TEAM = (state, payload) => {
  state.team = payload;
};

export const SET_MATCH = (state, payload) => {
  state.match = payload;
};

export const SET_STANDINGS = (state, payload) => {
  state.standings = payload;
};

