import { Button, ButtonProps } from '../../components/button/button';
import { FormProps } from '../../components/form/form';
import { Input, InputProps } from '../../components/form/input/input';
import { router } from '../../utils/router';

import {
    emailValidationRules,
    loginValidationRules,
    nameValidationRules,
    passwordConfimationRules,
    passwordValidationRules,
    phoneValidationRules,
} from '../../utils/validation';

const loginInputs: InputProps[] = [
    {
        type: 'text',
        label: 'Логин',
        name: 'name',
        validationRules: loginValidationRules,
    },
    {
        type: 'password',
        label: 'Пароль',
        name: 'password',
        validationRules: passwordValidationRules,
    },
];

const registrationInputs: InputProps[] = [
    {
        type: 'email',
        label: 'Почта',
        name: 'email',
        validationRules: emailValidationRules,
    },
    {
        type: 'text',
        label: 'Логин',
        name: 'login',
        validationRules: loginValidationRules,
    },
    {
        type: 'text',
        label: 'Имя',
        name: 'first_name',
        validationRules: nameValidationRules,
    },
    {
        type: 'text',
        label: 'Фамилия',
        name: 'second_name',
        validationRules: nameValidationRules,
    },
    {
        type: 'text',
        label: 'Телефон',
        name: 'phone',
        validationRules: phoneValidationRules,
    },
    {
        type: 'password',
        label: 'Пароль',
        name: 'password',
        validationRules: passwordValidationRules,
    },
    {
        type: 'password',
        label: 'Пароль (еще раз)',
        name: 'password_confirm',
        validationRules: passwordConfimationRules,
    },
];

const loginButtons: ButtonProps[] = [
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
        events: {
            click: () => router.go('/registration')
        }
    },
];

const registrationButtons: ButtonProps[] = [
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
        events: {
            click: () => router.go('/login')
        }
    },
];

export const getLoginPageContext = (type: 'login' | 'registration'): FormProps => {
    if (type === 'login') {
        return {
            title: 'Вход',
            id: 'login-form',
            inputs: {
                Component: Input,
                propList: loginInputs,
            },
            buttons: {
                Component: Button,
                propList: loginButtons,
            },
            onSubmit(values) {
                // eslint-disable-next-line no-console
                console.log(values);
            },
        };
    }
    return {
        title: 'Регистрация',
        id: 'registration-form',
        inputs: {
            Component: Input,
            propList: registrationInputs,
        },
        buttons: {
            Component: Button,
            propList: registrationButtons,
        },
        onSubmit(values) {
            // eslint-disable-next-line no-console
            console.log(values);
        },
    };
};
