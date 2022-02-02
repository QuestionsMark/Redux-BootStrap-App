export interface Anime {
    id: string;
    title: string;
    rate: number;
    image: string;
    types: string[];
}

export interface AnimeCreate {
    title: string;
    rate: number;
    image: string;
    types: string[];
}