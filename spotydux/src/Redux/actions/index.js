export const GET_ROCK = "GET_ROCK";
export const GET_POP = "GET_POP";
export const GET_HIPHOP = "GET_HIPHOP";
export const GET_SEARCH = "GET_SEARCH";
export const SELECTED_SONG = "SELECTED_SONG";
export const ADD_LIBRARY = "ADD_LIBRARY";
export const REMOVE_LIBRARY = "REMOVE_LIBRARY";

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

export const getDataAction = (query, type) => {
    return async (dispatch) => {
        try {
            let resp = await fetch(baseEndpoint + query, {
                headers: {
                    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
                    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
                },
            });
            if (resp.ok) {
                let result = await resp.json();
                console.log(result.data);
                dispatch({
                    type: type,
                    payload: result.data,
                });
            } else {
                throw new Error("Failed to fetch");
            }
        } catch (err) {
            console.log(err);
        }
    };
};

export const selectedSongAction = (title, albumCover, albumTitle) => ({
    type: SELECTED_SONG,
    payload: { songTitle: title, albumTitle: albumTitle, albumCover: albumCover },
});

export const addLibraryAction = (albumCover, title, songId) => ({
    type: ADD_LIBRARY,
    payload: { songTitle: title, albumCover: albumCover, songId: songId },
});

export const removeFromLibraryAction = (albumCover, title, songId) => ({
    type: REMOVE_LIBRARY,
    payload: { songTitle: title, albumCover: albumCover, songId: songId },
});
