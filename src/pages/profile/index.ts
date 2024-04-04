import "./profile.css";
import { IProfileFormInput } from '../../components/profileFormInput';
export { default as ProfilePage } from "./profile.hbs?raw";

const user = {
    email: "pochta@yandex.ru",
    login: "ivanivanov",
    first_name: "Иван",
    second_name: "Иванов",
    display_name: "Ваня",
    phone: "+7 (909) 967 30 30",
} as const;

const infoInputs = [
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
        label: "Имя в чате",
        name: "display_name",
    },
    {
        type: "text",
        label: "Телефон",
        name: "phone",
    },
] as const;

const changePasswordInputs = [
    {
        type: "password",
        label: "Старый пароль",
        name: "oldPassword",
        required: true,
    },
    {
        type: "password",
        label: "Новый пароль",
        name: "newPassword",
        required: true
    },
    {
        type: "password",
        label: "Повторите новый пароль",
        name: "newPassword_confirm",
        required: true,
    },
];

interface IProfilePageContext {
    type: 'info' | 'changeInfo' | 'changePassword';
    inputs: IProfileFormInput[];
}

export const getProfilePageContext = (type: IProfilePageContext['type']): IProfilePageContext => {
    switch (type) {
        case 'info': {
            const inputs = infoInputs.map((input) => ({
                ...input,
                disabled: true,
                value: user[input.name] || ''
            }));
            return {
                type,
                inputs,
            }
        }
        case 'changeInfo': {
            const inputs = infoInputs.map((input) => ({
                ...input,
                value: user[input.name] || ''
            }));
            return {
                type,
                inputs,
            }
        }
        case 'changePassword': {
            return {
                type,
                inputs: changePasswordInputs,
            }
        }
        default:
            const foo: never = type;
            return foo;
    }
};