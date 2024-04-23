import Block from '../../core/Block';
import { Form } from '../../components';
import { FormProps } from '../../components/form/form';
import { getLoginPageContext } from './helpers';

interface LoginProps extends FormProps {
    type: 'login' | 'registration';
}

export class LoginPage extends Block<LoginProps> {
    constructor(props: LoginProps) {
        const formProps = getLoginPageContext(props.type);
        super({
            ...props,
            LoginForm: new Form(formProps),
        });
    }

    init() {}

    onSubmit() {}

    render(): string {
        return `
            <main class="loginPage">
                <div class="loginPage__left"></div>
                <div class="loginPage__right">
                    <div class="loginPage__form">
                        {{{ LoginForm }}}
                    </div>
                </div>
            </main>
        `;
    }
}
