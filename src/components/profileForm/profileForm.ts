import Block, { CommonProps } from '../../core/Block';
import { User } from '../../types/user';
import { Button } from '../button';
import { ProfileFormInput } from './profileFormInput';
import { getProfilePageInputs } from './helpers';

export interface ProfileFormProps extends CommonProps {
    user: User;
    type: 'info' | 'changeInfo' | 'changePassword';
    onSubmit?: (values: Record<string, string>[]) => void;
    infoInputsKeys?: string[];
    changeInfoInputsKeys?: string[];
    changePasswordInputsKeys?: string[];
}
export class ProfileForm extends Block<ProfileFormProps> {
    private valid: boolean = false;
    private values: Record<string, string>[] = [];

    constructor(props: ProfileFormProps) {
        super({
            ...props,
            infoInputs: {
                Component: ProfileFormInput,
                propList: getProfilePageInputs('info', props.user),
            },
            changeInfoInputs: {
                Component: ProfileFormInput,
                propList: getProfilePageInputs('changeInfo', props.user),
            },
            changePasswordInputs: {
                Component: ProfileFormInput,
                propList: getProfilePageInputs('changePassword', props.user),
            },
        });
    }

    protected init(): void {
        const ChangeInfoButton = new Button({
            type: 'button',
            variant: 'primary',
            fill: 'link',
            text: 'Изменить данные',
            align: 'left',
            events: {
                click: this.handleChangeInfoButtonClick.bind(this),
            },
        });
        const ChangePasswordButton = new Button({
            type: 'button',
            variant: 'primary',
            fill: 'link',
            text: 'Изменить пароль',
            align: 'left',
            events: {
                click: this.handleChangePasswordButtonClick.bind(this),
            },
        });
        const LogoutButton = new Button({
            type: 'button',
            variant: 'danger',
            fill: 'link',
            text: 'Выйти',
            align: 'left',
        });
        const SaveButton = new Button({
            type: 'submit',
            variant: 'primary',
            fill: 'solid',
            text: 'Сохранить',
            align: 'center',
        });

        this.children = {
            ...this.children,
            ChangeInfoButton,
            ChangePasswordButton,
            LogoutButton,
            SaveButton,
        };

        this.setProps({
            events: {
                submit: this.handleSubmit.bind(this),
            },
        });
    }

    handleChangeInfoButtonClick() {
        this.props.type = 'changeInfo';
    }

    handleChangePasswordButtonClick() {
        this.props.type = 'changePassword';
    }

    handleSetUserAvatarButtonClick() {
        this.children.AvatarFormModal.setProps({ open: true });
    }

    collectValuesAndValidate() {
        let isFormValid = true;
        const values: Record<string, string>[] = [];
        const inputKeys =
            (this.props.type === 'info' && this.props.infoInputsKeys) ||
            (this.props.type === 'changeInfo' && this.props.changeInfoInputsKeys) ||
            (this.props.type === 'changePassword' && this.props.changePasswordInputsKeys) ||
            [];
        Object.entries(this.children).forEach(([key, value]) => {
            if (value instanceof ProfileFormInput && inputKeys.includes(key)) {
                values.push(value.value);
                const valid = value.validate();
                if (!valid) {
                    isFormValid = false;
                }
            }
        });
        this.values = values;
        this.valid = isFormValid;
    }

    handleSubmit(e: Event) {
        e.preventDefault();
        this.collectValuesAndValidate();
        if (this.valid && this.props.onSubmit) {
            this.props.onSubmit(this.values);
        }
    }

    render() {
        const inputs =
            (this.props.type === 'info' && this.props.infoInputsKeys) ||
            (this.props.type === 'changeInfo' && this.props.changeInfoInputsKeys) ||
            (this.props.type === 'changePassword' && this.props.changePasswordInputsKeys) ||
            [];
        const renderInputs = inputs
            .map((key) => `{{{${key}}}} <div class="separatorLine"></div>`)
            .join('');

        const renderButtons =
            this.props.type !== 'info'
                ? '{{{ SaveButton }}}'
                : (
                    `
                    {{{ ChangeInfoButton }}}
                    <div class="separatorLine"></div>
                    {{{ ChangePasswordButton }}}
                    <div class="separatorLine"></div>
                    {{{ LogoutButton }}}
                    `
                );

        return `
            <form class="prifileForm" id="profile-form">
                <h1 class="prifileForm__title">{{user.display_name}}</h1>
                ${renderInputs}
                <div class="prifileForm_buttons">
                    ${renderButtons}
                </div>
            </form>
        `;
    }
}
