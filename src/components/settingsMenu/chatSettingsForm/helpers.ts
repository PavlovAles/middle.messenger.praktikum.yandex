import { Button } from '../../button';
import { FormProps } from '../../form/form';
import { Input } from '../../form/input';

const addUserConfig: FormProps = {
    id: 'add-user-form',
    title: 'Добавить пользователя',
    inputs: {
        Component: Input,
        propList: [
            {
                type: 'text',
                label: 'Логин',
                name: 'name',
                required: true,
            },
        ],
    },
    buttons: {
        Component: Button,
        propList: [
            {
                type: 'submit',
                variant: 'primary',
                fill: 'solid',
                text: 'Добавить',
                align: 'center',
            },
        ],
    },
};

const removeUserConfig: FormProps = {
    id: 'remove-user-form',
    title: 'Удалить пользователя',
    inputs: {
        Component: Input,
        propList: [
            {
                type: 'text',
                label: 'Логин',
                name: 'name',
                required: true,
            },
        ],
    },
    buttons: {
        Component: Button,
        propList: [
            {
                type: 'submit',
                variant: 'primary',
                fill: 'solid',
                text: 'Удалить',
                align: 'center',
            },
        ],
    },
};

const deleteChatConfig: FormProps = {
    id: 'delete-chat-form',
    title: 'Удалить чат',
    buttons: {
        Component: Button,
        propList: [
            {
                type: 'submit',
                variant: 'danger',
                fill: 'solid',
                text: 'Удалить',
                align: 'center',
            },
        ],
    },
};

const changeGroupNameConfig: FormProps = {
    id: 'change-group-form',
    title: 'Переименовать',
    inputs: {
        Component: Input,
        propList: [
            {
                type: 'text',
                label: 'Название',
                name: 'groupName',
                required: true,
            },
        ],
    },
    buttons: {
        Component: Button,
        propList: [
            {
                type: 'submit',
                variant: 'primary',
                fill: 'solid',
                text: 'Поменять',
                align: 'center',
            },
        ],
    },
};

const chatSettingsFormPropsByType = {
    addUser: addUserConfig,
    removeUser: removeUserConfig,
    deleteChat: deleteChatConfig,
    changeGroupName: changeGroupNameConfig,
};

export const getChatSettingsFormProps = (type: keyof typeof chatSettingsFormPropsByType) => {
    return chatSettingsFormPropsByType[type];
};
