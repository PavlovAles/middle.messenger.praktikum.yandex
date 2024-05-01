import Block, { CommonProps } from '../../../core/Block';
import { Message } from '../../../types/message';
import { Avatar } from '../../avatar';

export interface ChatListItemProps extends CommonProps {
    avatar?: string;
    name: string;
    newMessagesCount?: number;
    lastMessage: Message;
}

export class ChatListItem extends Block<ChatListItemProps> {
    constructor(props: ChatListItemProps) {
        super({
            ...props,
            ChatAvatar: new Avatar({
                name: props.name,
                src: props.avatar,
            }),
        });
    }

    render() {
        return `
            <button type="button" class="chatListItem {{#if active}}chatListItem_active{{/if}}">
                <div class="chatListItem__avatar">
                    {{{ ChatAvatar }}}
                </div>
                <div class="wrapper">
                    <div class="chatListItem__top">
                        <h3 class="chatName">{{name}}</h3>
                        <p class="date">{{lastMessage.date}}</p>
                    </div>
                    <div class="chatListItem__bottom">
                        {{#if lastMessage.from}}
                            <p class="lastMessage">
                                {{#if lastMessage.from}}
                                    <span class="lastMessage__from">{{lastMessage.from.display_name}}:</span>
                                {{/if}}
                                <span class="lastMessage__text">{{lastMessage.text}}</span>
                            </p>
                            {{#if newMessagesCount}}
                                <p class="new-messages-counter">{{newMessagesCount}}</p>
                            {{/if}}
                        {{/if}}    
                    </div>
                </div>
            </li>
        `;
    }
}
