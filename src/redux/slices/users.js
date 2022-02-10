import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const defaultState = {
    users: [],
    page: 1,
    count: 0,
}

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
        setUsers: (state, { payload }) => {
            state.users = payload;
            state.count = payload.length;
        },
    }
});

export const { addUser, changeUsersPage, deleteUser, editUser, setUsers } = slice.actions;

export default slice.reducer;