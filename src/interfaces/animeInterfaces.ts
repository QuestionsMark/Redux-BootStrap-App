export interface Anime {
    id: string;
    title: string;
    rate: number;
    image: string;
    types: string[];
    description: string;
    color: string;
}

export interface AnimeCreate {
    title: string;
    rate: number;
    image: string;
    types: string[];
    description: string;
    color: string;
}

export interface AnimeData {
    anime: Anime[];
    count: number;
    page: number;
}