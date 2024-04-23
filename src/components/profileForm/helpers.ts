import { ProfileFormInputProps } from './profileFormInput/profileFormInput';
import { User } from '../../types/user';
import {
    emailValidationRules,
    loginValidationRules,
    nameValidationRules,
    passwordValidationRules,
    phoneValidationRules,
} from '../../utils/validation';

const infoInputs = [
    {
        type: 'email',
        label: 'Почта',
        name: 'email',
        required: true,
        validationRules: emailValidationRules,
    },
    {
        type: 'text',
        label: 'Логин',
        name: 'login',
        required: true,
        validationRules: loginValidationRules,
    },
    {
        type: 'text',
        label: 'Имя',
        name: 'first_name',
        validationRules: nameValidationRules,
    },
    {
        type: 'text',
        label: 'Фамилия',
        name: 'second_name',
        validationRules: nameValidationRules,
    },
    {
        type: 'text',
        label: 'Имя в чате',
        name: 'display_name',
    },
    {
        type: 'text',
        label: 'Телефон',
        name: 'phone',
        validationRules: phoneValidationRules,
    },
] as const;

const changePasswordInputs: ProfileFormInputProps[] = [
    {
        type: 'password',
        label: 'Старый пароль',
        name: 'oldPassword',
        validationRules: passwordValidationRules,
    },
    {
        type: 'password',
        label: 'Новый пароль',
        name: 'newPassword',
        required: true,
        validationRules: passwordValidationRules,
    },
    {
        type: 'password',
        label: 'Повторите новый пароль',
        name: 'newPassword_confirm',
        passwordConfirmField: true,
        passwordFieldName: 'newPassword',
        required: true,
    },
] as const;

export const getProfilePageInputs = (
    type: 'info' | 'changeInfo' | 'changePassword',
    user: User
): ProfileFormInputProps[] => {
    switch (type) {
        case 'info': {
            return infoInputs.map((input) => ({
                ...input,
                disabled: true,
                value: user[input.name] || '',
            }));
        }
        case 'changeInfo': {
            return infoInputs.map((input) => ({
                ...input,
                value: user[input.name] || '',
            }));
        }
        case 'changePassword': {
            return changePasswordInputs;
        }
        default: {
            const foo: never = type;
            return foo;
        }
    }
};
