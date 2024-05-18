import { InputProps } from '../../components/baseInput/baseInput';
import { Button, ButtonProps } from '../../components/button/button';
import { FormProps } from '../../components/form/form';
import { Input } from '../../components/form/input/input';
import { loginFormController, registrationFormController } from '../../controllers/formControllers';
import authController from '../../controllers/authController';
import router from '../../utils/router';

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
        name: 'login',
        storeFormName: 'loginForm',
        validationRules: loginValidationRules,
        onBlur: (field) => {
            loginFormController.setField(field);
        },
    },
    {
        type: 'password',
        label: 'Пароль',
        name: 'password',
        storeFormName: 'loginForm',
        onBlur: (field) => {
            loginFormController.setField(field);
        },
    },
];

const registrationInputs: InputProps[] = [
    {
        type: 'email',
        label: 'Почта',
        name: 'email',
        storeFormName: 'registrationForm',
        validationRules: emailValidationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Логин',
        name: 'login',
        storeFormName: 'registrationForm',
        validationRules: loginValidationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Имя',
        name: 'first_name',
        storeFormName: 'registrationForm',
        validationRules: nameValidationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Фамилия',
        name: 'second_name',
        storeFormName: 'registrationForm',
        validationRules: nameValidationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Телефон',
        name: 'phone',
        storeFormName: 'registrationForm',
        validationRules: phoneValidationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
    },
    {
        type: 'password',
        label: 'Пароль',
        name: 'password',
        storeFormName: 'registrationForm',
        validationRules: passwordValidationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
    },
    {
        type: 'password',
        label: 'Пароль (еще раз)',
        name: 'password_confirm',
        storeFormName: 'registrationForm',
        validationRules: passwordConfimationRules,
        onBlur: (field) => {
            registrationFormController.setField(field);
        },
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
            click: () => router.go('/sign-up'),
        },
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
            click: () => router.go('/sign-in'),
        },
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
            onSubmit() {
                const formIsValid = loginFormController.validateForm();
                if (!formIsValid) return;
                const fields = loginFormController.getFieldValues();
                authController.signIn(fields);
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
        onSubmit() {
            const formIsValid = registrationFormController.validateForm();
            if (!formIsValid) return;
            const fields = registrationFormController.getFieldValues();
            authController.signUp(fields);
        },
    };
};
