import { UserData } from "../interfaces/userInterfaces";
import { Action } from "../interfaces/generalInterfaces";

import { SET, ADD, DELETE, EDIT, UPDATE_PAGE } from '../actions/userActions.ts';

const defaultUserData: UserData = {
    users: [],
    page: 1,
    count: 0,
}

export const userReducer = (state = defaultUserData, action: Action): UserData => {
    switch (action.type) {
        case SET:
            return { ...action.payload };

        case ADD:
            return {
                ...state,
                users: [...state.users, action.payload],
                count: state.count + 1,
            };

        case DELETE:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id),
                count: state.count - 1,
            };

        case EDIT:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload.id) {
                        if (action.payload.avatar) return { ...action.payload };
                        return { ...action.payload, avatar: user.avatar };
                    }
                    return user;
                }),
            };

        case UPDATE_PAGE:
            return { ...state, page: action.payload.page };

        default:
            console.warn(`Nie znaleziono akcji typu: ${action.type}!`);
            return state;
    }
};