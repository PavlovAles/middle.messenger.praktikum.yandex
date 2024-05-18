import Block, { CommonProps } from '../../core/Block';
import router from '../../utils/router';
import { ChatSearchForm } from '../../components/chatSearchForm';
import { Button, ChatFeed, ChatList } from '../../components';
import { connect } from '../../utils/connect';
import { Modal } from '../../components/modal';
import { NewChatForm } from '../../components/newChatForm';
import { newChatFormController } from '../../controllers/formControllers';

export interface ChatsPageProps extends CommonProps {
    userId?: number;
    activeChatId?: number;
}

class ChatsPage extends Block<ChatsPageProps> {
    init() {
        this.children = {
            ...this.children,
            GoToProfileButton: new Button({
                type: 'button',
                variant: 'medium',
                fill: 'ghost',
                icon: 'arrow-right',
                text: 'Профиль',
                align: 'right',
                iconLast: true,
                events: {
                    click: () => router.go('/settings'),
                },
            }),
            CreateGroupButton: new Button({
                type: 'button',
                variant: 'primary',
                fill: 'solid',
                text: 'Создать группу',
                events: {
                    click: this.handleCreateGroupButtonClick.bind(this),
                },
            }),
            ChatList: new ChatList({}),
            ChatSearchForm: new ChatSearchForm({}),
            CreateChatFormModal: new Modal({
                Content: new NewChatForm({}),
                onClose: () => newChatFormController.resetForm(),
            }),
            ChatFeed: new ChatFeed({}),
        };
    }

    handleCreateGroupButtonClick() {
        this.children.CreateChatFormModal.setProps({ open: true });
    }

    protected componentDidMount(): void {
        if (!this.props.userId) {
            router.go('/login');
        }
    }

    render() {
        return `
            <div>
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
                <div class="main__right ${this.props.activeChatId ? '' : 'main__right_empty'}">
                    {{#if activeChatId}}
                        {{{ ChatFeed }}}
                    {{else}}
                        <div class="invite">
                            <p class="invite__text">Выберите чат</p>
                        </div
                    {{/if}}
                </div>
            </main>
            {{{ CreateChatFormModal }}}
            </div>
        `;
    }
}

const Connected = connect<ChatsPageProps>(({ user, activeChat }) => ({
    userId: user?.id,
    activeChatId: activeChat?.id,
}))(ChatsPage);
export { Connected as ChatsPage };
