import { Message } from './message';

export interface ChatListItem {
    avatar?: string;
    name: string;
    newMessagesCount?: number;
    lastMessage: Message;
}
