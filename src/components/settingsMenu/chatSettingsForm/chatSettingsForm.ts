import Block, { CommonProps } from '../../../core/Block';
import { AddUserForm } from './addUserForm';
import { ChangeChatAvatarForm } from './changeGroupAvatarForm';
import { DeleteChatForm } from './deleteChatForm';
import { RemoveUserForm } from './removeUserForm';
import {
    addUserFormController,
    removeUserFormController,
} from '../../../controllers/formControllers';

export type ChatSettingsFormType = 'addUser' | 'removeUser' | 'deleteChat' | 'changeGroupAvatar';
interface ChatSettingsFormProps extends CommonProps {
    type: ChatSettingsFormType;
}

export class ChatSettingsForm extends Block<ChatSettingsFormProps> {
    constructor(props: ChatSettingsFormProps) {
        const AddUserFormComponent = new AddUserForm({});
        const RemoveUserFormComponent = new RemoveUserForm({});
        const DeleteChatFormComponent = new DeleteChatForm({});
        const ChangeChatAvatarFormComponent = new ChangeChatAvatarForm({});

        super({
            ...props,
            AddUserFormComponent,
            RemoveUserFormComponent,
            DeleteChatFormComponent,
            ChangeChatAvatarFormComponent,
        });
    }

    reset() {
        addUserFormController.resetForm();
        removeUserFormController.resetForm();
        this.children.ChangeChatAvatarFormComponent.children.FormComponent.setProps({
            file: undefined,
            loading: false,
            error: undefined,
            noFileClick: false,
        });
    }

    render() {
        const FormComponent =
            (this.props.type === 'addUser' && 'AddUserFormComponent') ||
            (this.props.type === 'removeUser' && 'RemoveUserFormComponent') ||
            (this.props.type === 'deleteChat' && 'DeleteChatFormComponent') ||
            (this.props.type === 'changeGroupAvatar' && 'ChangeChatAvatarFormComponent');

        return `
            <div class="chatSettingsForm">
                {{{ ${FormComponent} }}}
            </div>
        `;
    }
}
