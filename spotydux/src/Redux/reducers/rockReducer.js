import { GET_ROCK } from "../actions/index";

const initialState = {
    results: null,
};

export const rockReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROCK:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};
