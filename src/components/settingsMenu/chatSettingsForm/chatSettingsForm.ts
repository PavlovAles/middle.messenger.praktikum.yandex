import Block, { CommonProps } from '../../../core/Block';
import { ChangeAvatarForm } from '../../changeAvatarForm';
import { Form } from '../../form';
import { getChatSettingsFormProps } from './helpers';

export type ChatSettingsFormType =
    | 'addUser'
    | 'removeUser'
    | 'deleteChat'
    | 'changeGroupName'
    | 'changeGroupAvatar';
interface ChatSettingsFormProps extends CommonProps {
    type: ChatSettingsFormType;
}

export class ChatSettingsForm extends Block<ChatSettingsFormProps> {
    constructor(props: ChatSettingsFormProps) {
        const AddUserForm = new Form(getChatSettingsFormProps('addUser'));
        const RemoveUserForm = new Form(getChatSettingsFormProps('removeUser'));
        const DeleteChatForm = new Form(getChatSettingsFormProps('deleteChat'));
        const ChangeGroupNameForm = new Form(getChatSettingsFormProps('changeGroupName'));
        const ChangeGroupAvatarForm = new ChangeAvatarForm({
            title: 'Загрузите файл',
        });

        super({
            ...props,
            AddUserForm,
            RemoveUserForm,
            ChangeGroupNameForm,
            DeleteChatForm,
            ChangeGroupAvatarForm,
        });
    }

    render() {
        const FormComponent =
            (this.props.type === 'addUser' && 'AddUserForm') ||
            (this.props.type === 'removeUser' && 'RemoveUserForm') ||
            (this.props.type === 'deleteChat' && 'DeleteChatForm') ||
            (this.props.type === 'changeGroupName' && 'ChangeGroupNameForm') ||
            (this.props.type === 'changeGroupAvatar' && 'ChangeGroupAvatarForm');

        return `
            <div class="chatSettingsForm">
                {{{ ${FormComponent} }}}
            </div>
        `;
    }
}
