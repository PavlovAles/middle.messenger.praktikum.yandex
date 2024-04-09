import Handlebars from 'handlebars';
import './chatSettings.css';
export { default as ChatSettings } from './chatSettings.hbs?raw';

const getButtonProps = (props: {
    text: string;
    icon: string;
    variant?: string;
}) => ({
    type: 'button',
    variant: 'primary',
    fill: 'ghost',
    align: 'left',
    ...props,
});

const directChatSettings = [
    {
        text: 'Добавить пользователя',
        icon: 'add',
    },
    {
        text: 'Удалить пользователя',
        icon: 'remove',
    },
    {
        text: 'Удалить чат',
        icon: 'remove',
        variant: 'danger',
    },
];

const groupChatSettings = [
    {
        text: 'Изменить группу',
        icon: 'arrow-right',
    },
    ...directChatSettings,
];

const changeGroupSettings = [
    {
        text: 'Переименовать',
        icon: 'pencil',
    },
    {
        text: 'Изменить аватар',
        icon: 'pencil',
    },
];

const chatSettingsButtonList = {
    direct: directChatSettings,
    group: groupChatSettings,
    changeGroup: changeGroupSettings,
};

Handlebars.registerHelper(
    'getChatSettingsButtonList',
    (type: keyof typeof chatSettingsButtonList) => {
        return chatSettingsButtonList[type].map(getButtonProps);
    },
);
