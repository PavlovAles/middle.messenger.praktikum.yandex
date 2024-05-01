import Block, { CommonProps } from '../../core/Block';
import { Modal } from '../../components/modal';
import { User } from '../../types/user';
import { Button, ChangeAvatarForm, SetUserAvatarButton } from '../../components';
import { ProfileForm } from '../../components/profileForm';
import { router } from '../../utils/router';

interface ProfilePageProps extends CommonProps {
    user: User;
}

export class ProfilePage extends Block<ProfilePageProps> {
    protected init(): void {
        const BackToMainButton = new Button({
            type: 'button',
            variant: 'primary',
            fill: 'solid',
            icon: 'arrow-left',
            asIconButton: true,
            events: {
                click: this.handleGoBackToMain.bind(this),
            }
        });

        const SetUserAvatarButtonComponent = new SetUserAvatarButton({
            src: this.props.user.avatar,
            name: this.props.user.display_name,
            events: {
                click: this.handleSetUserAvatarButtonClick.bind(this),
            },
        });

        const Form = new ProfileForm({
            type: 'info',
            user: this.props.user,
            onSubmit: (values) => {
                // eslint-disable-next-line no-console
                console.log(values);
            },
        });

        const AvatarFormModal = new Modal({
            Content: new ChangeAvatarForm({
                title: 'Загрузите файл',
            }),
        });

        this.children = {
            ...this.children,
            BackToMainButton,
            SetUserAvatarButtonComponent,
            Form,
            AvatarFormModal,
        };
    }

    handleSetUserAvatarButtonClick() {
        this.children.AvatarFormModal.setProps({ open: true });
    }

    handleGoBackToMain() {
        router.go('/main');
        this.children.Form.setProps({ type: 'info' });
    }

    render() {
        return `
            <div>
                <main class="profilePage">
                    <div class="profilePage__left">
                        {{{ BackToMainButton }}}
                    </div>
                    <div class="profilePage__right">
                        <div class="prifile__avatar">
                            {{{ SetUserAvatarButtonComponent }}}
                        </div>
                        {{{ Form }}}
                    </div>
                    {{{ AvatarFormModal }}}
                </main>
            </div>
        `;
    }
}
