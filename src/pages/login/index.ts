import './login.css';
export { default as LoginPage } from './login.hbs?raw';

const loginInputs = [
    {
        type: 'text',
        label: 'Логин',
        name: 'name',
        errorMessage: 'oops',
        required: true,
    },
    {
        type: 'password',
        label: 'Пароль',
        name: 'password',
        errorMessage: 'oops',
        required: true,
    },
];

const registrationInputs = [
    {
        type: 'email',
        label: 'Почта',
        name: 'email',
        required: true,
    },
    {
        type: 'text',
        label: 'Логин',
        name: 'login',
        required: true,
    },
    {
        type: 'text',
        label: 'Имя',
        name: 'first_name',
    },
    {
        type: 'text',
        label: 'Фамилия',
        name: 'second_name',
    },
    {
        type: 'text',
        label: 'Телефон',
        name: 'phone',
    },
    {
        type: 'text',
        label: 'Пароль',
        name: 'password',
        required: true,
    },
    {
        type: 'text',
        label: 'Пароль (еще раз)',
        name: 'password_confirm',
        required: true,
    },
];

const loginButtons = [
    {
        type: 'submit',
        variant: 'primary',
        fill: 'solid',
        text: 'Войти',
        align: 'center',
    },
    {
        type: 'button',
        variant: 'primary',
        fill: 'link',
        text: 'Нет аккаунта?',
    },
];

const registrationButtons = [
    {
        type: 'submit',
        variant: 'primary',
        fill: 'solid',
        text: 'Зарегистрироваться',
    },
    {
        type: 'button',
        variant: 'primary',
        fill: 'link',
        text: 'Войти',
    },
];

export const getLoginPageContext = (type: 'login' | 'registration') => {
    if (type === 'login') {
        return {
            formConfig: {
                title: 'Вход',
                id: 'login-form',
                inputs: loginInputs,
                buttons: loginButtons,
            },
        };
    } else {
        return {
            formConfig: {
                title: 'Регистрация',
                id: 'registration-form',
                inputs: registrationInputs,
                buttons: registrationButtons,
            },
        };
    }
};
