import { SELECTED_SONG } from "../actions/index";

const initialState = {
    song: {
        songTitle: "",
        albumTitle: "",
        albumCover: "",
    },
};

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_SONG:
            return {
                ...state,
                song: {
                    songTitle: action.payload.songTitle,
                    albumTitle: action.payload.albumTitle,
                    albumCover: action.payload.albumCover,
                },
            };
        default:
            return state;
    }
};

export default selectedReducer;
