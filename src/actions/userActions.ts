import { v4 as uuid } from 'uuid';

import { User, UserCreate } from '../interfaces/userInterfaces';

const ADD = 'ADD_USER';
const SET = 'SET_USER';
const DELETE = 'DELETE_USER';
const EDIT = 'EDIT_USER';
const UPDATE_PAGE = 'UPDATE_PAGE_USER';

export {
    SET,
    ADD,
    DELETE,
    EDIT,
    UPDATE_PAGE,
};

export const setUsers = () => ({
    type: SET,
    payload: {},
});

export const createUser = (data: UserCreate) => ({
    type: ADD,
    payload: {
        id: uuid() as string,
        ...data
    },
});

export const deleteUser = (id: string) => ({
    type: DELETE,
    payload: {
        id
    },
});

export const editUser = (data: User) => ({
    type: EDIT,
    payload: {
        ...data
    },
});

export const updateUsersPage = (page: number) => ({
    type: UPDATE_PAGE,
    payload: {
        page,
    },
});