import Block, { CommonProps } from '../../../core/Block';
import { InputField } from './inputField';

export interface ProfileFormInputProps extends CommonProps {
    label: string;
    type: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    passwordConfirmField?: boolean;
    passwordFieldName?: string;
    validationRules?: {
        rule: (value: string) => boolean;
        message: string;
    }[];
}

export class ProfileFormInput extends Block<ProfileFormInputProps> {
    private _value: string = '';

    constructor(props: ProfileFormInputProps) {
        super({
            ...props,
            InputField: new InputField({
                ...props,
                events: {
                    blur: (e) => {
                        const input = e.target as HTMLInputElement | null;
                        const value = input?.value;
                        this._value = value || '';
                        this.validate();
                        this.validatePasswordConfirmation();
                    },
                },
            }),
        });

        this._value = props.value || '';
    }

    get value() {
        return { [this.props.name]: this._value };
    }

    validatePasswordConfirmation() {
        if (this.props.passwordConfirmField) {
            const password =
                (this.element?.parentElement?.querySelector(
                    `input[name="${this.props.passwordFieldName}"]`
                ) as HTMLInputElement) || null;
            const passwordValue = password?.value;
            if (passwordValue !== this._value) {
                this.props.errorMessage = 'Пароли не совпадают';
                return false;
            }
            this.props.errorMessage = '';
            return true;
        }
        return true;
    }

    validate() {
        const rules = this.props.validationRules;
        let errorMessage = null;
        rules?.forEach((rule) => {
            const ok = rule.rule(this._value);
            if (!ok) {
                errorMessage = rule.message;
            }
        });
        this.props.errorMessage = errorMessage;
        return !errorMessage;
    }

    render() {
        return `
            <label class="profileFormInput {{#if error}}profileFormInput_error{{/if}}">
                <span class="profileFormInput__label">{{label}}</span>
                {{{ InputField }}}
                <div class="profileFormInput__error">{{errorMessage}}</div>
            </label>
        `;
    }
}
