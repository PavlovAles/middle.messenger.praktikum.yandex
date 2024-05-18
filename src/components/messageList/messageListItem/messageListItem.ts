import Block, { CommonProps } from '../../../core/Block';
import { WSMessage } from '../../../types/message';
import { connect } from '../../../utils/connect';
import { Icon } from '../../icon';

export interface MessageListItemProps extends CommonProps {
    message: WSMessage;
    userId?: number;
}

class MessageListItem extends Block<MessageListItemProps> {
    constructor(props: MessageListItemProps) {
        super({
            ...props,
            ReadedIcon: new Icon({
                icon: 'read',
                small: true,
            }),
            UnReadedIcon: new Icon({
                icon: 'unread',
                small: true,
            }),
        });
    }

    render() {
        const content = this.props.message.content;
        const sanitizedContent = content.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        const incomming = this.props.userId !== this.props.message.user_id;
        const icon = this.props.message.is_read ? 'ReadedIcon' : 'UnReadedIcon';
        const date = new Date(this.props.message.time).toLocaleTimeString('ru-RU').slice(0, -3);

        return `
            <div class="messageListItem ${incomming ? 'messageListItem_incoming' : ''}">
                ${sanitizedContent}<span class="timeSpaceHolder"></span>
                <div class="time">
                    ${incomming ? '' : `{{{${icon}}}}`}
                    ${date}
                </div>
            </div>    
        `;
    }
}

const Connected = connect<MessageListItemProps>(({ user }) => ({
    userId: user?.id,
}))(MessageListItem);
export { Connected as MessageListItem };
