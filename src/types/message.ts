import { User } from './user';

export interface Message {
    from: User;
    date: string;
    text?: string;
    image?: string;
    readed?: boolean;
    sended?: boolean;
    incoming?: boolean;
}
