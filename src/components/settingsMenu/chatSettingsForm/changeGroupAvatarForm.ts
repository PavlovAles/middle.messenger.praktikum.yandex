import chatController from '../../../controllers/chatController';
import Block, { CommonProps } from '../../../core/Block';
import { connect } from '../../../utils/connect';
import { ChangeAvatarForm } from '../../changeAvatarForm';

interface ChangeChatAvatarFormProps extends CommonProps {
    activeChatId?: number;
}

class ChangeChatAvatarForm extends Block<ChangeChatAvatarFormProps> {
    init() {
        const FormComponent = new ChangeAvatarForm({
            title: 'Загрузите файл',
            onSubmit: this.handleSubmit.bind(this),
        });
        this.children = {
            FormComponent,
        };
    }

    handleSubmit(data: FormData) {
        if (!this.props.activeChatId) return;
        data.append('chatId', this.props.activeChatId?.toString() || '');
        chatController.changeChatAvatar(data);
    }

    render() {
        return `
            <div class="chatSettingsForm">
                {{{ FormComponent }}}
            </div>
        `;
    }
}

const Connected = connect<ChangeChatAvatarFormProps>(({ activeChat }) => ({
    activeChatId: activeChat?.id,
}))(ChangeChatAvatarForm);
export { Connected as ChangeChatAvatarForm };
