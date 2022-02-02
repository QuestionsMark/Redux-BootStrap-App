import { v4 as uuid } from 'uuid';

import { User, UserCreate } from '../interfaces/userInterfaces';

const ADD = 'ADD_USER';
const DELETE = 'DELETE_USER';
const EDIT = 'EDIT_USER';

export {
    ADD,
    DELETE,
    EDIT,
};

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