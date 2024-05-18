import Block, { CommonProps } from '../../../core/Block';
import { MyStoreFormNameFields } from '../../../core/store';

interface InputFieldProps extends CommonProps {
    type: string;
    name: MyStoreFormNameFields;
    required?: boolean;
    errorMessage?: string;
}

export class InputField extends Block<InputFieldProps> {
    render() {
        return `
            <input 
                class="form-input__input {{#if errorMessage}}form-input__input_error{{/if}}" 
                type="{{type}}" 
                name="{{name}}" 
                {{#if required}}required{{/if}}
                value="{{value}}"
                placeholder=""
            />
        `;
    }
}
