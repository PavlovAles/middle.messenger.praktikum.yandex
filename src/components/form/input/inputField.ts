import Block, { CommonProps } from '../../../core/Block';

interface InputProps extends CommonProps {
    type: string;
    name: string;
    required?: boolean;
    errorMessage?: string;
}

export class InputField extends Block<InputProps> {
    render() {
        return `
            <input 
                class="form-input__input {{#if errorMessage}}form-input__input_error{{/if}}" 
                type="{{type}}" 
                name="{{name}}" 
                {{#if required}}required{{/if}}
                placeholder=""
            />
        `;
    }
}
