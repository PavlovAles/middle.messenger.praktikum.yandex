import chatController from '../../../controllers/chatController';
import { addUserFormController } from '../../../controllers/formControllers';
import Block, { CommonProps } from '../../../core/Block';
import { connect } from '../../../utils/connect';
import { Button } from '../../button';
import { Form } from '../../form';
import { FormProps } from '../../form/form';
import { Input } from '../../form/input';

interface AddUserFormProps extends CommonProps {
    activeChatId?: number;
}

class AddUserForm extends Block<AddUserFormProps> {
    init() {
        const ConnectedForm = connect<FormProps>(({ addUserForm }) => ({
            loading: addUserForm?.loading,
            error: addUserForm?.error,
            success: addUserForm?.success,
        }))(Form);

        const FormComponent = new ConnectedForm({
            id: 'add-user-form',
            title: 'Добавить пользователя',
            inputs: {
                Component: Input,
                propList: [
                    {
                        type: 'text',
                        label: 'Логин',
                        name: 'name',
                        required: true,
                        storeFormName: 'addUserForm',
                        onBlur: (field) => {
                            addUserFormController.setField(field);
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
                        text: 'Добавить',
                        align: 'center',
                    },
                ],
            },
            onSubmit: () => {
                if (!this.props.activeChatId) return;
                const formIsValid = addUserFormController.validateForm();
                if (!formIsValid) return;
                const fields = addUserFormController.getFieldValues();
                chatController.addUserToChat({
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

const Connected = connect<AddUserFormProps>(({ activeChat }) => ({
    activeChatId: activeChat?.id,
}))(AddUserForm);
export { Connected as AddUserForm };
