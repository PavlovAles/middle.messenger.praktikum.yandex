import { BaseInput } from '../../baseInput';
import { InputProps } from '../../baseInput/baseInput';
import { InputField } from './inputField';

export class Input extends BaseInput {
    constructor(props: InputProps) {
        super({ ...props, InputFieldClass: InputField });
    }

    render() {
        return `
            <div class="form-input-wrapper">
                <label class="form-input">
                   {{{ InputField }}}
                    <div class="form-input__label">{{label}}</div>
                </label>
                <div class="form-input-wrapper__error">{{error}}</div>
            </div>
        `;
    }
}
