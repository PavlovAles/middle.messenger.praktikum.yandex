import { ButtonProps } from '../../button/button';

export const сhatSettingsButtons: ButtonProps[] = [
    {
        text: 'Изменить аватар',
        icon: 'pencil',
        id: 'changeGroupAvatar',
        type: 'button',
        variant: 'primary',
        fill: 'ghost',
        align: 'left',
    },
    {
        text: 'Добавить пользователя',
        icon: 'add',
        id: 'addUser',
        type: 'button',
        variant: 'primary',
        fill: 'ghost',
        align: 'left',
    },
    {
        text: 'Удалить пользователя',
        icon: 'remove',
        id: 'removeUser',
        type: 'button',
        variant: 'primary',
        fill: 'ghost',
        align: 'left',
    },
    {
        text: 'Удалить чат',
        icon: 'remove',
        variant: 'danger',
        id: 'deleteChat',
        type: 'button',
        fill: 'ghost',
        align: 'left',
    },
];
