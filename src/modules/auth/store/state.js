/**
 * Authentication status
 * @returns {{access_token: null, user: null, status: string}}
 */

export default () => ({
    status: 'authenticating',
    user: null,
    access_token: null,
})
