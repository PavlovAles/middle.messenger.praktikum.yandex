import chatController from '../../../controllers/chatController';
import Block, { CommonProps } from '../../../core/Block';
import { removeUserFormController } from '../../../controllers/formControllers';
import { connect } from '../../../utils/connect';
import { Button } from '../../button';
import { Form } from '../../form';
import { FormProps } from '../../form/form';
import { Input } from '../../form/input';

interface RemoveUserFormProps extends CommonProps {
    activeChatId?: number;
}

class RemoveUserForm extends Block<RemoveUserFormProps> {
    init() {
        const ConnectedForm = connect<FormProps>(({ removeUserForm }) => ({
            loading: removeUserForm?.loading,
            error: removeUserForm?.error,
            success: removeUserForm?.success,
        }))(Form);

        const FormComponent = new ConnectedForm({
            id: 'remove-user-form',
            title: 'Удалить пользователя',
            inputs: {
                Component: Input,
                propList: [
                    {
                        type: 'text',
                        label: 'Логин',
                        name: 'name',
                        required: true,
                        storeFormName: 'removeUserForm',
                        onBlur: (field) => {
                            removeUserFormController.setField(field);
                        },
                    },
                ],
            },
            buttons: {
                Component: Button,
                propList: [
                    {
                        type: 'submit',
                        variant: 'primary',
                        fill: 'solid',
                        text: 'Удалить',
                        align: 'center',
                    },
                ],
            },
            onSubmit: () => {
                if (!this.props.activeChatId) return;
                const formIsValid = removeUserFormController.validateForm();
                if (!formIsValid) return;
                const fields = removeUserFormController.getFieldValues();
                chatController.removeUserFromChat({
                    login: fields.name,
                    chatId: this.props.activeChatId,
                });
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

const Connected = connect<RemoveUserFormProps>(({ activeChat }) => ({
    activeChatId: activeChat?.id,
}))(RemoveUserForm);
export { Connected as RemoveUserForm };
