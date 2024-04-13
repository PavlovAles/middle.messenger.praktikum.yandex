import Handlebars from 'handlebars';
import './chatSettingsForm.css';

export { default as ChatSettingsForm } from './chatSettingsForm.hbs?raw';

const addUserConfig = {
    id: 'add-user-form',
    title: 'Добавить пользователя',
    inputs: [
        {
            type: 'text',
            label: 'Логин',
            name: 'name',
            required: true,
        },
    ],
    buttons: [
        {
            type: 'submit',
            variant: 'primary',
            fill: 'solid',
            text: 'Добавить',
            align: 'center',
        },
    ],
};

const removeUserConfig = {
    id: 'remove-user-form',
    title: 'Удалить пользователя',
    inputs: [
        {
            type: 'text',
            label: 'Логин',
            name: 'name',
            required: true,
        },
    ],
    buttons: [
        {
            type: 'submit',
            variant: 'primary',
            fill: 'solid',
            text: 'Удалить',
            align: 'center',
        },
    ],
};

const deleteChatConfig = {
    id: 'delete-chat-form',
    title: 'Удалить чат',
    inputs: [],
    buttons: [
        {
            type: 'submit',
            variant: 'danger',
            fill: 'solid',
            text: 'Удалить',
            align: 'center',
        },
    ],
};

const changeGroupNameConfig = {
    id: 'change-group-form',
    title: 'Переименовать',
    inputs: [
        {
            type: 'text',
            label: 'Название',
            name: 'groupName',
            required: true,
        },
    ],
    buttons: [
        {
            type: 'submit',
            variant: 'primary',
            fill: 'solid',
            text: 'Поменять',
            align: 'center',
        },
    ],
};

const chatSettingsFormPropsByType = {
    addUser: addUserConfig,
    removeUser: removeUserConfig,
    deleteChat: deleteChatConfig,
    changeGroupName: changeGroupNameConfig,
};

Handlebars.registerHelper(
    'getChatSettingsFormProps',
    (type: keyof typeof chatSettingsFormPropsByType) => {
        return chatSettingsFormPropsByType[type];
    },
);
