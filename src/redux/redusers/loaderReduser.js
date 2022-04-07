export const LOADER_HIDE = 'loaderReduser/LOADER_HIDE';
export const LOADER_SHOW = 'loaderReduser/LOADER_SHOW';

const initialStore = {
    status: false
};

export function loaderReduser(state = initialStore, action) {
    switch (action.type) {
        case LOADER_HIDE: {
            return {
                ...state,
                status: false
            };
        }
        case LOADER_SHOW: {
            return {
                ...state,
                status: true
            };
        }
        default:
            return state;
    };
};
export const loaderHide = () => {
    return {
        type: LOADER_HIDE
    };
};
export const loaderShow = () => {
    return {
        type: LOADER_SHOW
    };
};
