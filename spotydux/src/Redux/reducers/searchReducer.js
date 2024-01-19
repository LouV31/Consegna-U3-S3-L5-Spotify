import { GET_SEARCH } from "../actions/index";

const initialState = {
    results: null,
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SEARCH:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};
