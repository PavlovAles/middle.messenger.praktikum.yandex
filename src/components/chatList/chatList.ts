import chatController from '../../controllers/chatController';
import Block, { CommonProps } from '../../core/Block';
import { ChatListItem } from '../../types/chatItem';
import { connect } from '../../utils/connect';
import { ChatListItemProps, ChatListItemWidget } from './chatListItem/chatListItem';

export interface ChatListProps extends CommonProps {
    chats?: ChatListItem[];
    loading?: boolean;
    chatsKeys?: string[];
}

class ChatList extends Block<ChatListProps> {
    protected componentDidMount(): void {
        chatController.getChats();
    }

    protected componentDidUpdate(oldProps: ChatListProps, newProps: ChatListProps): boolean {
        if (
            oldProps.loading === newProps.loading &&
            oldProps.chats?.length === newProps.chats?.length
        ) {
            return false;
        }
        const chats = newProps.chats || [];
        if (!chats?.length) {
            this.children = {};
            return true;
        }

        const componentDict = chats.reduce<Record<string, Block<ChatListItemProps>>>(
            (acc, data) => {
                const component = new ChatListItemWidget({ ...data });
                acc[component.id] = component;
                return acc;
            },
            {}
        );
        this.children = { ...componentDict };
        this.setProps({ chatsKeys: Object.keys(componentDict) });
        return true;
    }

    render() {
        return `
            <ul class="chatList">
                ${this.props.chatsKeys?.map((key) => `<li>{{{ ${key} }}}</li>`).join('') || ''}
            </ul>    
        `;
    }
}

const Connected = connect<ChatListProps>(({ chats }) => ({
    loading: chats.loading,
    chats: chats.list,
}))(ChatList);
export { Connected as ChatList };
