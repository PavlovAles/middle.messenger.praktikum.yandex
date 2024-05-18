import { InputProps } from '../baseInput/baseInput';
import {
    emailValidationRules,
    loginValidationRules,
    nameValidationRules,
    passwordValidationRules,
    phoneValidationRules,
} from '../../utils/validation';
import { profileFormController, passwordFormController } from '../../controllers/formControllers';

const infoInputs: InputProps[] = [
    {
        type: 'email',
        label: 'Почта',
        name: 'email',
        required: true,
        validationRules: emailValidationRules,
        storeFormName: 'profileForm',
        onBlur: (field) => {
            profileFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Логин',
        name: 'login',
        required: true,
        validationRules: loginValidationRules,
        storeFormName: 'profileForm',
        onBlur: (field) => {
            profileFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Имя',
        name: 'first_name',
        validationRules: nameValidationRules,
        storeFormName: 'profileForm',
        onBlur: (field) => {
            profileFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Фамилия',
        name: 'second_name',
        validationRules: nameValidationRules,
        storeFormName: 'profileForm',
        onBlur: (field) => {
            profileFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Имя в чате',
        name: 'display_name',
        storeFormName: 'profileForm',
        onBlur: (field) => {
            profileFormController.setField(field);
        },
    },
    {
        type: 'text',
        label: 'Телефон',
        name: 'phone',
        validationRules: phoneValidationRules,
        storeFormName: 'profileForm',
        onBlur: (field) => {
            profileFormController.setField(field);
        },
    },
] as const;

const changePasswordInputs: InputProps[] = [
    {
        type: 'password',
        label: 'Старый пароль',
        name: 'oldPassword',
        validationRules: passwordValidationRules,
        storeFormName: 'passwordForm',
        onBlur: (field) => {
            passwordFormController.setField(field);
        },
    },
    {
        type: 'password',
        label: 'Новый пароль',
        name: 'password',
        required: true,
        validationRules: passwordValidationRules,
        storeFormName: 'passwordForm',
        onBlur: (field) => {
            passwordFormController.setField(field);
        },
    },
    {
        type: 'password',
        label: 'Повторите новый пароль',
        name: 'password_confirm',
        required: true,
        storeFormName: 'passwordForm',
        onBlur: (field) => {
            passwordFormController.setField(field);
        },
    },
] as const;

export const getProfilePageInputs = (
    type: 'info' | 'changeInfo' | 'changePassword',
): InputProps[] => {
    switch (type) {
        case 'info': {
            return infoInputs.map((input) => ({
                ...input,
                disabled: true,
            }));
        }
        case 'changeInfo': {
            return infoInputs.map((input) => ({
                ...input,
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
