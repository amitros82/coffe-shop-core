export interface UserInput {
    email: string;
    name: string ;
    password: string;
    role: 'user' | 'admin';
}

export interface UserResponse {
    id: number;
    email: string;
    name: string;
    role: string;
}

