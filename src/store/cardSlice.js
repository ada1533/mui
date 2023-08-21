import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCards = createAsyncThunk(
    'cards/getCards',
    async (_, { getState }) => {
        let { currentPage } = getState().cards
        let { data } = await axios.get(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        return data;
    }
)

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: [],
        currentPage: 1,
        totalPages: 1
    },
    reducers: {
        changePage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getCards.fulfilled, (state, action) => {
            console.log(action.payload);
            state.cards = action.payload.results;
            state.totalPages = action.payload.info.pages;
        })
    }
});

export const { changePage } = cardSlice.actions;
export default cardSlice.reducer;