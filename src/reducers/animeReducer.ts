import { Anime } from '../interfaces/animeInterfaces';
import { Action } from '../interfaces/generalInterfaces';

import { ADD, DELETE, EDIT } from '../actions/animeActions.ts';

const defaultAnime = [
    {
        id: '45ec21f0-c780-44e2-b9ff-29767926959b',
        image: '/images/boruto.webp',
        rate: Math.round(Math.random() * (10 - 2) + 2),
        title: 'Boruto',
        types: ['Dramat', 'Romans', 'Wojskowe', 'Fantasy']
    },
    {
        id: 'ed9e902a-8ec9-4c39-b536-ae9fd709f61a',
        image: '/images/charlotte.webp',
        rate: Math.round(Math.random() * (10 - 2) + 2),
        title: 'Charlotte',
        types: ['Dramat', 'Romans', 'Wojskowe', 'Komedia']
    },
    {
        id: '1a24d248-160b-4da8-a0cd-002f959be5f8',
        image: '/images/konosuba2.webp',
        rate: Math.round(Math.random() * (10 - 2) + 2),
        title: 'Konosuba 2',
        types: ['Dramat', 'Psychologiczne', 'Fantasy']
    },
    {
        id: 'fa629b9d-38b3-479f-a61d-7755a9f7820a',
        image: '/images/oregairu1.webp',
        rate: Math.round(Math.random() * (10 - 2) + 2),
        title: 'Oregairu',
        types: ['Dramat', 'Romans', 'Wojskowe', 'Psychologiczne', 'Fantasy']
    },
    {
        id: 'ef817c1d-03c7-4e74-afe3-332553438c82',
        image: '/images/oregairu2.webp',
        rate: Math.round(Math.random() * (10 - 2) + 2),
        title: 'Oregairu 2 (Zoku)',
        types: ['Dramat']
    },
    {
        id: 'ef817c1d-04c7-4ef4-aae3-332512348c82',
        image: '/images/re-zero.webp',
        rate: Math.round(Math.random() * (10 - 2) + 2),
        title: 'Re:Zero',
        types: ['Dramat', 'Romans', 'Wojskowe', 'Komedia', 'Psychologiczne', 'Fantasy']
    },
];

export const animeReducer = (state: Anime[] = defaultAnime, action: Action): Anime[] => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];

        case DELETE:
            return state.filter(anime => anime.id !== action.payload.id);

        case EDIT:
            return state.map(anime => {
                if (anime.id === action.payload.id) return { ...action.payload };
                return anime;
            });

        default:
            console.warn(`Nie znaleziono akcji typu: ${action.type}!`);
            return state;
    }
};