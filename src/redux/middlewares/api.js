import { SET as SET_ANIME } from '../actions/animeActions.ts';
import { SET as SET_USERS } from '../actions/userActions.ts';
import { HOST_ADDRESS } from '../config';

export const getData = store => next => async action => {
    if (action.type === SET_ANIME) {
        const response = await fetch(`${HOST_ADDRESS}/anime/card-info`);
        if (response.ok) {
            const anime = await response.json();
            action.payload.anime = anime;
            action.payload.count = anime.length;
            action.payload.page = 1;
            next(action);
        }
    } else if (action.type === SET_USERS) {
        const response = await fetch(`${HOST_ADDRESS}/users/card-info`);
        if (response.ok) {
            const users = await response.json();
            action.payload.users = users;
            action.payload.count = users.length;
            action.payload.page = 1;
            next(action);
        }
    } else {
        next(action);
    }
}