import Block, { CommonProps, ComponentList } from '../../core/Block';
import { MessageListItemProps } from './messageListItem/messageListItem';

export interface MessageListProps extends CommonProps {
    messages: ComponentList<MessageListItemProps>;
    messagesKeys?: string[];
}

export class MessageList extends Block<MessageListProps> {
    render() {
        return `
            <div class="messageList">
                <ul class="messageList__daily-list">
                    ${this.props.messagesKeys?.map((key) => `{{{ ${key} }}}`).join('') || ''}
                </ul>
            </div>
        `;
    }
}
