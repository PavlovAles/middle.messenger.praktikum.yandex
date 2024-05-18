import { BaseInput } from '../../baseInput';
import { InputProps } from '../../baseInput/baseInput';
import { InputField } from './inputField';

export class ProfileFormInput extends BaseInput {
    constructor(props: InputProps) {
        super({ ...props, InputFieldClass: InputField });
    }

    render() {
        return `
            <label class="profileFormInput {{#if error}}profileFormInput_error{{/if}}">
                <span class="profileFormInput__label">{{label}}</span>
                {{{ InputField }}}
                <div class="profileFormInput__error">{{error}}</div>
            </label>
        `;
    }
}
