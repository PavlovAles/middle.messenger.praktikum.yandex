import Handlebars from 'handlebars';
import './login.css';
export { default as LoginPage } from './login.hbs?raw';

const inputs = [
    {
        type: "text",
        label: "Логин",
        name: "name",
        errorMessage: "oops",
        required: true,
    },
    {
        type: "password",
        label: "Пароль",
        name: "password",
        errorMessage: "oops",
        required: true,
    }
];

const buttons = [
    {
        type: "submit",
        variant: "primary",
        fill: "solid",
        text: "Войти",
        align: 'center',
    },
    {
        type: "button",
        variant: "primary",
        fill: "link",
        text: "Нет аккаунта?",
    }
];

Handlebars.registerHelper('loginFormConfig', () => {
    return {
        title: 'Вход',
        id: 'login-form',
        inputs,
        buttons,
    };
}) 
