import { v4 as uuid } from 'uuid';

import { Anime, AnimeCreate } from "../interfaces/animeInterfaces";

const ADD = 'ADD_ANIME';
const DELETE = 'DELETE_ANIME';
const EDIT = 'EDIT_ANIME';

export {
    ADD,
    DELETE,
    EDIT,
};

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