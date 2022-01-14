import state from './state';
import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

/**
 * Authentication status module
 * @type {
 * {mutations: {signInUser?: function(*, Object): void},
 * state: ((function(): {access_token: null, user: null, status: string})|*),
 * getters: {getUserState?: function(*): {name: (*|string), username: (*|string), lastname: string}},
 * actions: {signInUser?: function(Object, *): Promise, singUpUser?: function(Object, *): Promise},
 * namespaced: boolean}}
 */
const authModule = {
    namespaced: true,
    actions,
    getters,
    mutations,
    state
};


export default authModule;
