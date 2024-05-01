import Block, { CommonProps } from '../../../core/Block';
import { InputField } from './inputField';

export interface InputProps extends CommonProps {
    type: string;
    name: string;
    label: string;
    validationRules?: {
        rule: (value: string) => boolean;
        message: string;
    }[];
}

export class Input extends Block<InputProps> {
    private _value: string = '';

    constructor(props: InputProps) {
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
    }

    get value() {
        return { [this.props.name]: this._value };
    }

    validatePasswordConfirmation() {
        if (this.props.name === 'password_confirm') {
            const password =
                (this.element?.parentElement?.querySelector(
                    'input[name="password"]'
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
            <div class="form-input-wrapper">
                <label class="form-input">
                   {{{ InputField }}}
                    <div class="form-input__label">{{label}}</div>
                </label>
                <div class="form-input-wrapper__error">{{errorMessage}}</div>
            </div>
        `;
    }
}
