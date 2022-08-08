import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
<<<<<<< HEAD
import userReducer from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice";

export default configureStore( {
    reducer: {
        user: userReducer,
=======
import  useReducer  from "../features/user/userSlice";
import movieReducer from "../features/movie/movieSlice"

// import movieReducer from "../features/movie/movieSlice";

export default configureStore ({
    reducer : {
        user: useReducer,
>>>>>>> origin/master
        movie: movieReducer,
    },
    middleware: getDefaultMiddleware( {
        serializableCheck: false,
    } ),
} );