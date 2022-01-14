import authApi from '@/api/authApi';

export const signInUser = async ({commit}, user) => {

    const {username, password} = user;

    try {
        const {data} = await authApi.post('/auth/login', {username, password});
        commit('signInUser', {data});

        return {ok: true};

    } catch (error) {

        return {ok: false, message: error.response.data.msg};
    }

};

export const createUser = async ({commit}, user) => {

    const {
        name,
        last_name,
        phone_number,
        email,
        username,
        password,
        confirmPassword
    } = user;

    try {
        await authApi.post('/user', {
            name,
            last_name,
            phone_number,
            email,
            username,
            password,
            confirmPassword
        });
        return {ok: true};

    } catch (error) {
        console.log(error.response.data);

        if (error.response.data.message === 'Unauthorized') return {ok: false, message: error.response.data.message};
        if (error.response.data.status === 'ERROR') return {ok: false, message: error.response.data.msg};

    }

};
