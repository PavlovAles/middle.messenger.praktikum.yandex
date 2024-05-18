import Block, { CommonProps } from '../../core/Block';
import { connect } from '../../utils/connect';
import { SettingsMenu } from '../settingsMenu';
import { Avatar } from '../avatar';
import { MessageList } from '../messageList';
import { MessageForm } from '../messageForm';
import { ChatListItem } from '../../types/chatItem';
import { AvatarProps } from '../avatar/avatar';

export interface ChatFeedProps extends CommonProps {
    userId?: number;
    activeChat?: Partial<Pick<ChatListItem, 'id' | 'title' | 'avatar'>>;
}

class ChatFeed extends Block<ChatFeedProps> {
    init() {
        const ChatAvatar = connect<AvatarProps>(({ activeChat }) => ({ src: activeChat?.avatar }))(
            Avatar
        );

        this.children = {
            ...this.children,
            SettingMenu: new SettingsMenu({
                settingType: 'group',
            }),
            ChatAvatar: new ChatAvatar({}),
            MessageList: new MessageList({}),
            MessageFormProps: new MessageForm({}),
        };
    }

    render() {
        return `
            <div class="feed">
                <div class="feed__top">
                    <div class="header">
                        <div class="header__avatar">
                            {{{ ChatAvatar }}}
                        </div>
                        <h1 class="header__text">{{activeChat.title}}</h2>
                    </div>
                    {{{ SettingMenu }}}
                </div>
                {{{ MessageList }}}
                <div class="feed__bottom">
                    {{{ MessageFormProps }}}
                </div>
            </div>
        `;
    }
}

const Connected = connect<ChatFeedProps>(({ user, activeChat }) => ({
    userId: user?.id,
    activeChat: {
        id: activeChat?.id,
        title: activeChat?.title,
        avatar: activeChat?.avatar,
    },
}))(ChatFeed);
export { Connected as ChatFeed };
