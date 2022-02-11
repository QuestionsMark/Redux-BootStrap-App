import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { callApi } from '../../utils/callApi';

const defaultState = {
    anime: [],
    page: 1,
    count: 0,
    isPending: false,
    requestId: null,
}

export const fetchAnime = createAsyncThunk('anime/fetchAnime', async (args, thunkAPI) => {
    try {
        const { anime } = thunkAPI.getState();
        if (anime.isPending && anime.requestId !== thunkAPI.requestId) return;
        return callApi('anime/card-info', []);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

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
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchAnime.pending, (state, action) => {
                if (state.isPending) return;
                state.isPending = true;
                state.requestId = action.meta.requestId;
            })
            .addCase(fetchAnime.fulfilled, (state, { payload }) => {
                if (!payload) return;
                state.anime.push(...payload);
                state.count = payload.length;
                state.isPending = false;
                state.requestId = null;
            })
            .addCase(fetchAnime.rejected, (state, { error }) => {
                console.warn('Błąd!!! ', error.message);
                state.isPending = false;
                state.requestId = null;
            })
    }
});

export const { addAnime, changeAnimePage, deleteAnime, editAnime, setAnime } = slice.actions;

export default slice.reducer;