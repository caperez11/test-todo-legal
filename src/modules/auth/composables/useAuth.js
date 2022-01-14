import {computed} from 'vue';
import {useStore} from 'vuex';

/**
 * @description
 * Composable function that returns the all actions to perform the login
 * and getUserState creation and get the getUserState status.
 * @returns {object}
 */
const useAuth = () => {
    const store = useStore();
    const singUpUser = async (user) => await store.dispatch('auth/singUpUser', user);
    const signInUser = async (user) => await store.dispatch('auth/signInUser', user);

    return {
        singUpUser,
        signInUser,

        user: computed(() => store.getters['auth/getUserState'])
    };
};

export default useAuth;
