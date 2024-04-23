import { User } from './user';

export interface ChatGroup {
    display_name: string;
    avatar?: string;
    users: User[];
}
