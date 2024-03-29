import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { rockReducer } from "../reducers/rockReducer";
import { popReducer } from "../reducers/popReducer";
import { hipHopReducer } from "../reducers/hiphopReducer";
import { searchReducer } from "../reducers/searchReducer";
import selectedReducer from "../reducers/selectedReducer";
import libraryReducer from "../reducers/addReducer";

const rootReducer = combineReducers({
    rock: rockReducer,
    pop: popReducer,
    hiphop: hipHopReducer,
    search: searchReducer,
    selected: selectedReducer,
    library: libraryReducer,
});

const store = configureStore({
    reducer: rootReducer,
});
export default store;
