interface User {
    name: string,
    email: string,
    nickname?: string,
    description?: string,
}

export interface UserState {
    data: User | null,
};





