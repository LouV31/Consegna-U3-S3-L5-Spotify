import { GET_POP } from "../actions/index";

const initialState = {
    results: null,
};

export const popReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POP:
            return {
                ...state,
                results: action.payload,
            };
        default:
            return state;
    }
};
