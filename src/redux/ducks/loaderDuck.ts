// Actions
export const LOADER_HIDE:string = 'loaderDuck/LOADER_HIDE';
export const LOADER_SHOW:string = 'loaderDuck/LOADER_SHOW';

const initialStore: IInitialStore = {
    status: false
};
// Reducer
export function loaderReducers(state = initialStore, action: ILoaderReducers) {
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

// Action Creators
export const loaderHide: () => ILoaderHide = () => {
    return {
        type: LOADER_HIDE
    };
};

export const loaderShow: () => ILoaderShow   = () => {
    return {
        type: LOADER_SHOW
    };
};

// Interface
interface IInitialStore {
    status: boolean
};

interface ILoaderHide {
        type: typeof LOADER_HIDE
};

interface ILoaderShow {
        type: typeof LOADER_SHOW
};

interface ILoaderReducers {
    type: string
};
