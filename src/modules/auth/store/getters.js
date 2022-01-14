export const user = (state) => {

    return {
        username: state.user?.username || 'Sin cédula',
        name: state.user?.name || 'Sin Nombre',
        lastname: state.user?.lastname || 'Sin Apellido',
    };
};
