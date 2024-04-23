import Block, { CommonProps, ComponentList } from '../../core/Block';
import { ChatListItemProps } from './chatListItem/chatListItem';

export interface ChatListProps extends CommonProps {
    chats: ComponentList<ChatListItemProps>;
    chatsKeys?: string[];
}

export class ChatList extends Block<ChatListProps> {
    render() {
        return `
            <ul class="chatList">
                ${this.props.chatsKeys?.map((key) => `<li>{{{ ${key} }}}</li>`).join('') || ''}
            </ul>    
        `;
    }
}
