import Block from '../../core/Block';
import { Form } from '../../components';
import { FormProps } from '../../components/form/form';
import { getLoginPageContext } from './helpers';
import { connect } from '../../utils/connect';
import { MyStore } from '../../core/store';

interface LoginPageProps extends FormProps {
    type: 'login' | 'registration';
    userId?: number;
}

export class LoginPage extends Block<LoginPageProps> {
    init() {
        const mapLoginFormState = ({ loginForm }: MyStore) => {
            return { loading: loginForm?.loading, error: loginForm?.error };
        };
        const LoginForm = connect<FormProps>(mapLoginFormState)(Form);

        const mapRegistrationFormState = ({ registrationForm }: MyStore) => {
            return { loading: registrationForm?.loading, error: registrationForm?.error };
        };
        const RegistrationForm = connect<FormProps>(mapRegistrationFormState)(Form);

        this.children = {
            ...this.children,
            LoginForm: new LoginForm(getLoginPageContext('login')),
            RegistrationForm: new RegistrationForm(getLoginPageContext('registration')),
        };
    }

    render(): string {
        const FormComponent = this.props.type === 'login' ? 'LoginForm' : 'RegistrationForm';
        return `
            <div>
                <main class="loginPage">
                    <div class="loginPage__left"></div>
                    <div class="loginPage__right">
                        <div class="loginPage__form">
                            {{{${FormComponent}}}}
                        </div>
                    </div>
                </main>
            </div>
        `;
    }
}

const Connected = connect<LoginPageProps>(({ user }) => ({
    userId: user?.id,
}))(LoginPage);
export { Connected as ChatsPage };
