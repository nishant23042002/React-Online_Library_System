import { configureStore } from "@reduxjs/toolkit";
import { bookReducer } from "./bookSlice";

export const bookStore = configureStore({
    reducer: {
        books: bookReducer
    }
})