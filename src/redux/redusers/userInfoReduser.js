export const FILL_USER = 'userInfoReduser/FILL_USER';
export const POST_USER = 'userInfoReduser/POST_USER';

const initialStore = {
    userInfo: {}
};

export function userInfoReduser(state = initialStore, action) {
    switch (action.type) {
        case FILL_USER: {
            const copyUserInfo = Object.assign({}, action.payload);
            return {
                ...state,
                userInfo: copyUserInfo
            };
        }
        default:
            return state;
    };
};

export const fillUser = data => {
    return {
        type: FILL_USER,
        payload: data
    };
};

export const postUserInfoAction = data => {
    return {
        type: POST_USER,
        payload: data
    };
};
