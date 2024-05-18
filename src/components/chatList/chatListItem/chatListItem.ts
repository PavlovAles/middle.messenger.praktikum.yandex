import chatController from '../../../controllers/chatController';
import Block, { CommonProps } from '../../../core/Block';
import { ChatListItem } from '../../../types/chatItem';
import { connect } from '../../../utils/connect';
import { formatDate } from '../../../utils/formatDate';
import { Avatar } from '../../avatar';

export interface ChatListItemProps extends CommonProps, ChatListItem {
    activeChat?: {
        id?: number;
    };
}

class ChatListItemWidget extends Block<ChatListItemProps> {
    init() {
        this.children = {
            ChatAvatar: new Avatar({
                name: this.props.title,
                src: this.props.avatar,
            }),
        };
        this.setProps({
            events: {
                click: this.handleChatClick.bind(this),
            },
        });
    }

    handleChatClick() {
        chatController.setActiveChat(this.props.id);
    }

    render() {
        const lastMessageTime = formatDate(this.props.last_message?.time);
        const activeClass =
            this.props.activeChat?.id === this.props.id ? 'chatListItem_active' : '';
        return `
            <button type="button" class="chatListItem ${activeClass}">
                <div class="chatListItem__avatar">
                    {{{ ChatAvatar }}}
                </div>
                <div class="wrapper">
                    <div class="chatListItem__top">
                        <h3 class="chatName">{{title}}</h3>
                        <p class="date">${lastMessageTime}</p>
                    </div>
                    <div class="chatListItem__bottom">
                        {{#if last_message.from}}
                            <p class="lastMessage">
                                {{#if last_message.from}}
                                    <span class="lastMessage__from">{{last_message.from.display_name}}:</span>
                                {{/if}}
                                <span class="lastMessage__text">{{last_message.content}}</span>
                            </p>
                            {{#if unred_count}}
                                <p class="new-messages-counter">{{unred_count}}</p>
                            {{/if}}
                        {{/if}}    
                    </div>
                </div>
            </li>
        `;
    }
}

const Connected = connect<ChatListItemProps>(({ activeChat }) => ({
    activeChat: { id: activeChat?.id },
}))(ChatListItemWidget);
export { Connected as ChatListItemWidget };
