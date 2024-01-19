import { ADD_LIBRARY, REMOVE_LIBRARY } from "../actions";

const initialState = {
    library: [],
};

const libraryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIBRARY:
            return {
                ...state,
                library: [...state.library, action.payload],
            };
        case REMOVE_LIBRARY:
            return {
                library: state.library.filter((song) => song.songId !== action.payload),
            };
        default:
            return state;
    }
};
export default libraryReducer;
