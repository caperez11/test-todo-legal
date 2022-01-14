/**
 * Change to set user and token in state and local Storage.
 * @param {Object} payload
 * @param state
 */
export const signInUser = (state, {data}) => {
    const {access_token, id_token, refresh_token, token_type, status, ...user} = data;
    if (access_token) {
        const accesToken = `${token_type} ${access_token}`;
        localStorage.setItem('access_token', accesToken);
        state.access_token = access_token;
    }
    state.user = user;
    state.status = 'authenticated';
};
