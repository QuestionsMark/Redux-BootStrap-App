import { User } from "../interfaces/userInterfaces";
import { Action } from "../interfaces/generalInterfaces";

import { ADD, DELETE, EDIT } from '../actions/userActions.ts';
import { description } from '../utils/loremContent';

const defaultUsers = [
    {
        id: 'ba7b8522-1908-49a9-9550-dc4176a492f1',
        avatar: '/images/oregairu3.webp',
        color: '#ffb700',
        description,
        email: 'siema@onet.pl',
        username: 'Question Mark',
    },
    {
        id: 'fad69737-4dfa-41d0-91a1-77ae0dd80c04',
        avatar: '/images/sword-art-online2.webp',
        color: '#cda970',
        description,
        email: 'przemo@gmail.com',
        username: 'Przemciosss',
    },
    {
        id: '5ce74a3b-0206-4759-8388-c1ac4afa4dfc',
        avatar: '/images/death-note.webp',
        color: '#30e53a',
        description,
        email: 'popus@wp.pl',
        username: 'PpekKOX',
    },
    {
        id: '450c3450-7bca-4c35-a332-fee9c38cbde3',
        avatar: '/images/piano-no-mori.webp',
        color: '#80450a',
        description,
        email: 'antos@wp.pl',
        username: 'T0NY',
    },
    {
        id: 'd3caa1d8-8ba6-449b-9dfb-a0912903a5c6',
        avatar: '/images/bunny-girl.webp',
        color: '#1c2882',
        description,
        email: 'grzes@onet.pl',
        username: 'Grzejson',
    },
    {
        id: 'cec6bb45-a1d3-4ae3-ae28-b196cc8c0fb9',
        avatar: '/images/konosuba1.webp',
        color: '#6d1a5d',
        description,
        email: 'potato@onet.pl',
        username: 'Potato Shef',
    },
    {
        id: '7d0c808f-9872-4400-a23a-952e95ecf9f0',
        avatar: '/images/konosuba2.webp',
        color: '#42d4ae',
        description,
        email: 'turboburbo@onet.pl',
        username: 'Turbo Bocz',
    },
    {
        id: '2764fab1-081d-43f1-9063-f0c704d6e218',
        avatar: '/images/violet-evergarden.webp',
        color: '#9e6373',
        description,
        email: 'majster123@onet.pl',
        username: 'Pan Majster',
    },
    {
        id: 'ad1e7bb4-d0ae-431b-a7d5-73e9beb2ddf0',
        avatar: '/images/kimi-no-na-wa.webp',
        color: '#9d1486',
        description,
        email: 'olex321@onet.pl',
        username: 'Żon',
    },
    {
        id: '4dc309a9-f176-4602-8006-135658784708',
        avatar: '/images/kotonoha-no-niva.webp',
        color: '#5d5fe2',
        description,
        email: 'blue@onet.pl',
        username: 'Blev',
    },
    {
        id: '50e8f1e9-38bb-48b6-b4ae-8b74d423a235',
        avatar: '/images/sword-art-online3.webp',
        color: '#291764',
        description,
        email: 'kszysiu@onet.pl',
        username: 'Kszysiu',
    },
    {
        id: 'd874f3d1-34b0-4be5-a8de-4f0744a1951c',
        avatar: '/images/shuumatsu.webp',
        color: '#8bf6a4',
        description,
        email: 'hell@onet.pl',
        username: 'Hellout',
    },
    {
        id: '11871320-934f-4319-af03-e2fbe80840b7',
        avatar: '/images/fruits-basket-final.webp',
        color: '#45330c',
        description,
        email: 'matisek@onet.pl',
        username: 'Miś Matiś',
    },
]

export const userReducer = (state: User[] = defaultUsers, action: Action): User[] => {
    switch (action.type) {
        case ADD:
            return [...state, action.payload];

        case DELETE:
            return state.filter(user => user.id !== action.payload.id);

        case EDIT:
            return state.map(user => {
                if (user.id === action.payload.id) {
                    if (action.payload.avatar) return { ...action.payload };
                    return { ...action.payload, avatar: user.avatar };
                }
                return user;
            });

        default:
            console.warn(`Nie znaleziono akcji typu: ${action.type}!`);
            return state;
    }
};