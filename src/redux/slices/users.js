import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { callApi } from '../../utils/callApi';

const defaultState = {
    users: [],
    page: 1,
    count: 0,
    isPending: false,
    requestId: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (args, thunkAPI) => {
    try {
        const { users } = thunkAPI.getState();
        if (users.isPending && users.requestId !== thunkAPI.requestId) return;
        return callApi('users/card-info', []);
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

const slice = createSlice({
    name: 'users',
    initialState: defaultState,
    reducers: {
        addUser: (state, { payload }) => {
            state.users.push({ id: uuid(), ...payload });
        },
        changeUsersPage: (state, { payload }) => {
            state.page = payload;
        },
        deleteUser: (state, { payload }) => {
            state.users = state.users.filter(user => user.id !== payload);
            state.count = state.count - 1;
        },
        editUser: (state, { payload }) => {
            state.users = state.users.map(user => {
                if (user.id === payload.id) {
                    if (payload.avatar) return { ...payload };
                    return { ...payload, avatar: user.avatar };
                }
                return user;
            })
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUsers.pending, (state, action) => {
                if (state.isPending) return;
                state.isPending = true;
                state.requestId = action.meta.requestId;
            })
            .addCase(fetchUsers.fulfilled, (state, { payload }) => {
                if (!payload) return;
                state.users.push(...payload);
                state.count = payload.length;
                state.isPending = false;
                state.requestId = null;
            })
            .addCase(fetchUsers.rejected, (state, { error }) => {
                console.warn('Błąd!!! ', error.message);
                state.isPending = false;
                state.requestId = null;
            })
    }
});

export const { addUser, changeUsersPage, deleteUser, editUser, setUsers } = slice.actions;

export default slice.reducer;