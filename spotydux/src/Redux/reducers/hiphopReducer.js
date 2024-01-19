import { GET_HIPHOP } from "../actions/index";

const initialState = {
    results: null,
};

export const hipHopReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_HIPHOP:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};
