import { ButtonProps } from '../../button/button';
import { ChatSettingsFormType } from '../chatSettingsForm/chatSettingsForm';

const getButtonProps = (props: Partial<ButtonProps>): ButtonProps => ({
    type: 'button',
    variant: 'primary',
    fill: 'ghost',
    align: 'left',
    ...props,
});

const directChatSettings: (Partial<ButtonProps> & { id: ChatSettingsFormType })[] = [
    {
        text: 'Добавить пользователя',
        icon: 'add',
        id: 'addUser',
    },
    {
        text: 'Удалить пользователя',
        icon: 'remove',
        id: 'removeUser',
    },
    {
        text: 'Удалить чат',
        icon: 'remove',
        variant: 'danger',
        id: 'deleteChat',
    },
];

const groupChatSettings: Partial<ButtonProps>[] = [
    {
        text: 'Изменить группу',
        icon: 'arrow-right',
        id: 'changeGroup',
    },
    ...directChatSettings,
];

const changeGroupSettings: (Partial<ButtonProps> & { id: ChatSettingsFormType })[] = [
    {
        text: 'Переименовать',
        icon: 'pencil',
        id: 'changeGroupName',
    },
    {
        text: 'Изменить аватар',
        icon: 'pencil',
        id: 'changeGroupAvatar',
    },
];

const chatSettingsButtonList = {
    direct: directChatSettings,
    group: groupChatSettings,
    changeGroup: changeGroupSettings,
};

export const getChatSettingsButtonList = (
    type: keyof typeof chatSettingsButtonList
): ButtonProps[] => {
    return chatSettingsButtonList[type].map(getButtonProps);
};
