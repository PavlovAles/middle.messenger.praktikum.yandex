import Block, { CommonProps } from '../../core/Block';
import { WSMessage } from '../../types/message';
import { connect } from '../../utils/connect';
import { MessageListItem, MessageListItemProps } from './messageListItem/messageListItem';

export interface MessageListProps extends CommonProps {
    messages?: WSMessage[];
    messagesKeys?: string[];
}

class MessageList extends Block<MessageListProps> {
    protected componentDidUpdate(oldProps: MessageListProps, newProps: MessageListProps): boolean {
        if (oldProps.messages?.length === newProps.messages?.length) {
            return false;
        }
        const messages = newProps.messages || [];
        if (!messages?.length) {
            this.children = {};
            return true;
        }

        const componentDict = messages.reduce<Record<string, Block<MessageListItemProps>>>(
            (acc, data) => {
                const component = new MessageListItem({ message: data });
                acc[component.id] = component;
                return acc;
            },
            {}
        );
        this.children = { ...componentDict };
        this.setProps({ messagesKeys: Object.keys(componentDict) });
        return true;
    }

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

const Connected = connect<MessageListProps>(({ messages }) => ({
    messages,
}))(MessageList);
export { Connected as MessageList };
