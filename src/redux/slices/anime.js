import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const defaultState = {
    anime: [],
    page: 1,
    count: 0,
}

const slice = createSlice({
    name: 'anime',
    initialState: defaultState,
    reducers: {
        addAnime: (state, { payload }) => {
            state.anime.push({ id: uuid(), ...payload });
        },
        changeAnimePage: (state, { payload }) => {
            state.page = payload;
        },
        deleteAnime: (state, { payload }) => {
            state.anime = state.anime.filter(anime => anime.id !== payload);
            state.count = state.count - 1;
        },
        editAnime: (state, { payload }) => {
            state.anime = state.anime.map(user => {
                if (user.id === payload.id) {
                    if (payload.image) return { ...payload };
                    return { ...payload, image: user.image };
                }
                return user;
            })
        },
        setAnime: (state, { payload }) => {
            state.anime = payload;
            state.count = payload.length;
        },
    }
});

export const { addAnime, changeAnimePage, deleteAnime, editAnime, setAnime } = slice.actions;

export default slice.reducer;