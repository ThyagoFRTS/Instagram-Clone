interface User {
    name: string,
    email: string,
    nickname?: string,
    description?: string,
}

export interface UserLoginState {
    name: string,
    email: string,
}

export interface UserState {
    data: User | null,
};





