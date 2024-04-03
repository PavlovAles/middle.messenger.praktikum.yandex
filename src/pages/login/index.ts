import Handlebars from 'handlebars';
import './login.css';
export { default as LoginPage } from './login.hbs?raw';

const loginFormInputs = [
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

const loginFormButtons = [
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

Handlebars.registerHelper('loginFormInputs', () => {
    return loginFormInputs;
});

Handlebars.registerHelper('loginFormButtons', () => {
    return loginFormButtons;
}) 
