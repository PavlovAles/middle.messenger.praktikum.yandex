import { ApiMessage } from './message';

export interface ChatListItem {
    id: number;
    title: string;
    avatar: string;
    unred_count: number;
    created_by: number;
    last_message: ApiMessage;
}
