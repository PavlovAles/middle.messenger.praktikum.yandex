export interface User {
    id: number;
    email: string;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    phone?: string;
    avatar?: string;
}

const USER_FIELD_LIST: (keyof User)[] = ['id', 'email', 'login', 'first_name', 'second_name', 'display_name', 'phone', 'avatar',];

export const isUserField = (x: string): x is keyof User => {
    return (typeof x === 'string') && USER_FIELD_LIST.includes(x as keyof User);
};
