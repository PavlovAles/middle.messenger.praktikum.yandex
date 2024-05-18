import chatController from '../../../controllers/chatController';
import Block, { CommonProps } from '../../../core/Block';
import { connect } from '../../../utils/connect';
import { Button } from '../../button';
import { Form } from '../../form';

interface DeleteChatFormProps extends CommonProps {
    activeChatId?: number;
}

class DeleteChatForm extends Block<DeleteChatFormProps> {
    init() {
        const FormComponent = new Form({
            id: 'delete-chat-form',
            title: 'Удалить чат',
            buttons: {
                Component: Button,
                propList: [
                    {
                        type: 'submit',
                        variant: 'danger',
                        fill: 'solid',
                        text: 'Удалить',
                        align: 'center',
                    },
                ],
            },
            onSubmit: () => {
                if (!this.props.activeChatId) return;
                chatController.deleteChat(this.props.activeChatId);
            },
        });
        this.children = {
            FormComponent,
        };
    }

    render() {
        return `
            <div class="chatSettingsForm">
                {{{ FormComponent }}}
            </div>
        `;
    }
}

const Connected = connect<DeleteChatFormProps>(({ activeChat }) => ({
    activeChatId: activeChat?.id,
}))(DeleteChatForm);
export { Connected as DeleteChatForm };
