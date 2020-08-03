export const types = {
    SIGN_IN: 'USER/SIGN_IN',
    SIGN_OUT: 'USER/SIGN_OUT',
    SET_PERMISSIONS: 'USER/SET_ROLES',
};

const initialState = {
    token: null,
    isAuthorized: false,
    permissions: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                ...state,
                token: action.token,
                permissions: action.permissions,
                isAuthorized: true,
            };

        case types.SIGN_OUT:
            return {
                ...state,
                token: null,
                isAuthorized: false,
            };

        case types.SET_PERMISSIONS:
            return {
                ...state,
                token: null,

            };

        default:
            return state
    }
}


export const actions = {
    signIn: token => async dispatch => {
        localStorage.setItem('token', token)

        const permissions = ['manager'];

        dispatch({
            type: types.SIGN_IN,
            token,
            permissions
        });

    },

    signOut: () => async dispatch => {

        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            // Intentionally slow down application to see async logic
            await new Promise(resolve => setTimeout(resolve, 500))
        }

        localStorage.removeItem('token');
        dispatch({
            type: types.SIGN_OUT
        });
    },

    setPermissions: permissions => async dispatch => {
        dispatch({
            type: types.SET_PERMISSIONS,
            permissions
        });
    }

};