import Handlebars from 'handlebars';
import './registration.css';
export { default as RegistrationPage } from './registration.hbs?raw';

const registrationFormInputs = [
    {
        type: "email",
        label: "Почта",
        name: "email",
        required: true,
    },
    {
        type: "text",
        label: "Логин",
        name: "login",
        required: true,
    },
    {
        type: "text",
        label: "Имя",
        name: "first_name",
    },
    {
        type: "text",
        label: "Фамилия",
        name: "second_name",
    },
    {
        type: "text",
        label: "Телефон",
        name: "phone",
    },
    {
        type: "text",
        label: "Пароль",
        name: "password",
        required: true,
    },
    {
        type: "text",
        label: "Пароль (еще раз)",
        name: "password_confirm",
        required: true
    },
];

const registrationFormButtons = [
    {
        type: "submit",
        variant: "primary",
        fill: "solid",
        text: "Зарегистрироваться",
    },
    {
        type: "button",
        variant: "primary",
        fill: "link",
        text: "Войти",
    }
];

Handlebars.registerHelper('registrationFormInputs', () => {
    return registrationFormInputs;
});

Handlebars.registerHelper('registrationFormButtons', () => {
    return registrationFormButtons;
})
