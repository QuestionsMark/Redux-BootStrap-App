import { v4 as uuid } from 'uuid';

import { Anime, AnimeCreate } from "../interfaces/animeInterfaces";

const SET = 'SET_ANIME';
const ADD = 'ADD_ANIME';
const DELETE = 'DELETE_ANIME';
const EDIT = 'EDIT_ANIME';

const UPDATE_PAGE = 'UPDATE_PAGE_ANIME'

export {
    SET,
    ADD,
    DELETE,
    EDIT,
    UPDATE_PAGE,
};

export const setAnime = () => ({
    type: SET,
    payload: {}
})

export const addAnime = (data: AnimeCreate) => ({
    type: ADD,
    payload: {
        id: uuid() as string,
        ...data
    }
});

export const deleteAnime = (id: string) => ({
    type: DELETE,
    payload: {
        id
    }
});

export const editAnime = (data: Anime) => ({
    type: EDIT,
    payload: {
        ...data
    }
});

export const updateAnimePage = (page: number) => ({
    type: UPDATE_PAGE,
    payload: {
        page,
    }
});