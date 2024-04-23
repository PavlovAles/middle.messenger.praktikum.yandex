import {
    Avatar,
    Button,
    ChatList,
    ChatListItem,
    MessageList,
    MessageListItem,
} from '../../components';
import { AttachmentMenu } from '../../components/attachmentMenu';
import { ChatSearchForm } from '../../components/chatSearchForm';
import { MessageForm } from '../../components/messageForm';
import { SettingsMenu } from '../../components/settingsMenu';
import Block, { CommonProps } from '../../core/Block';
import { testChatListData, testMessageListData } from '../../utils/mocks';

export interface MainPageProps extends CommonProps {}

export class MainPage extends Block<MainPageProps> {
    constructor(props: MainPageProps) {
        super({
            ...props,
            chatName: 'Очередной чат',
            GoToProfileButton: new Button({
                type: 'button',
                variant: 'medium',
                fill: 'ghost',
                icon: 'arrow-right',
                text: 'Профиль',
                align: 'right',
                iconLast: true,
            }),
            CreateGroupButton: new Button({
                type: 'button',
                variant: 'primary',
                fill: 'solid',
                text: 'Создать группу',
            }),
            SettingMenu: new SettingsMenu({
                settingType: 'group',
            }),
            AttachmentMenu: new AttachmentMenu({}),
            SendMessageButton: new Button({
                type: 'submit',
                variant: 'primary',
                fill: 'ghost',
                icon: 'arrow-right',
                asIconButton: true,
            }),
            ChatAvatar: new Avatar({
                name: 'Очередной чат',
                src: 'https://source.unsplash.com/random/200x200',
            }),
            ChatList: new ChatList({
                chats: {
                    Component: ChatListItem,
                    propList: testChatListData,
                },
            }),
            MessageList: new MessageList({
                messages: {
                    Component: MessageListItem,
                    propList: testMessageListData,
                },
            }),
            MessageFormProps: new MessageForm({}),
            ChatSearchForm: new ChatSearchForm({}),
        });
    }

    render() {
        return `
          <main class="main">
            <div class="main__left">
                <div class="button-wrapper">
                    {{{ GoToProfileButton }}}
                </div>
                {{{ ChatSearchForm }}}
                <div class="button-wrapper">
                    {{{ CreateGroupButton }}}
                </div>
                {{{ ChatList }}}
            </div>
            <div class="main__right">
                <div class="feed">
                    <div class="feed__top">
                        <div class="header">
                            <div class="header__avatar">
                                {{{ ChatAvatar }}}
                            </div>
                            <h1 class="header__text">{{chatName}}</h2>
                        </div>
                        {{{ SettingMenu }}}
                    </div>
                    {{{ MessageList }}}
                    <div class="feed__bottom">
                        {{{ AttachmentMenu }}}
                        {{{ MessageFormProps }}}
                        {{{ SendMessageButton }}}
                    </div>
                </div>
            </div>
          </main>
        `;
    }
}
