import Handlebars from 'handlebars';
import './chatSettingsForm.css';
export { default as ChatSettingsForm } from './chatSettingsForm.hbs?raw';

const addUserConfig = {
    title: 'Добавить пользователя',
    inputs: [{
        type: "text",
        label: "Логин",
        name: "name",
        required: true,
    }],
    buttons: [{
        type: "submit",
        variant: "primary",
        fill: "solid",
        text: "Добавить",
        align: "center",
    }],
};

const removeUserConfig = {
    title: 'Удалить пользователя',
    inputs: [{
        type: "text",
        label: "Логин",
        name: "name",
        required: true,
    }],
    buttons: [{
        type: "submit",
        variant: "primary",
        fill: "solid",
        text: "Удалить",
        align: "center",
    }],
}

Handlebars.registerHelper('chatSettingsFormAddUser', () => {
    return addUserConfig;
}) 

Handlebars.registerHelper('chatSettingsFormRemoveUser', () => {
    return removeUserConfig;
}) 
