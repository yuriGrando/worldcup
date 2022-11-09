export const SET_TOKEN = (state, payload) => {
    state.token = payload;
    localStorage.setItem('token', payload)
};

