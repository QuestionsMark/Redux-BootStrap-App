export interface User {
    id: string;
    avatar: string;
    color: string;
    description: string;
    email: string;
    username: string;
};

export interface UserCreate {
    avatar: string;
    color: string;
    description: string;
    email: string;
    username: string;
};