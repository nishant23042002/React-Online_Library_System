import { books } from "./Books";
import { createSlice } from '@reduxjs/toolkit'

const bookSlice = createSlice({
    name: 'books',
    initialState: {
        books: [...books]
    },
    reducers: {
        addBooks: (state, action) => {
            const newBook = {
                ...action.payload,
                id: state.books.length + 1,
            };
            state.books.push(newBook);
        },
    },
})

export const { addBooks } = bookSlice.actions
export const bookReducer = bookSlice.reducer;