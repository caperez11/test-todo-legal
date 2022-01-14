/**
 * Get user status
 * Obtains the user of the state with its properties and returns them.
 * @param state
 * @returns {{name: (*|string), username: (*|string), lastname: (string)}}
 */
export const getUserState = (state) => {
    return {
        username: state.user?.username || 'Sin cédula',
        name: state.user?.name || 'Sin Nombre',
        lastname: state.user?.lastname || 'Sin Apellido',
    };
};
