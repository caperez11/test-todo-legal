import authApi from '@/api/authApi';

/**
 * Action to sing in getUserState
 * Action that receives the commit and the getUserState to login
 * and returns a promise with the results.
 * @param {Object} payload
 * @param user
 * @returns {Promise}
 */
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

/**
 * Action to sing up getUserState
 * Action that receives the commit and the getUserState to register
 * and returns a promise with the results.
 * @param {Object} payload
 * @param user
 * @returns {Promise}
 */
export const singUpUser = async ({commit}, user) => {

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
        if (error.response.data.message === 'Unauthorized') return {ok: false, message: error.response.data.message};
        if (error.response.data.status === 'ERROR') return {ok: false, message: error.response.data.msg};

    }

};
