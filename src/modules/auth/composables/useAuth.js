import {computed} from 'vue';
import {useStore} from 'vuex';


const useAuth = () => {
    const store = useStore();
    const createUser = async (user) => await store.dispatch('auth/createUser', user);
    const signInUser = async (user) => await store.dispatch('auth/signInUser', user);

    console.log(store.getters['auth/user']);
    return {
        createUser,
        signInUser,

        user: computed(() => store.getters['auth/user'])
    };
};

export default useAuth;
