import Block, { CommonProps } from '../../../core/Block';

interface InputProps extends CommonProps {
    type: string;
    name: string;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: string;
}

export class InputField extends Block<InputProps> {
    render() {
        return `
            <input class="profileFormInput__input" 
                type="{{type}}"
                name="{{name}}" 
                value="{{value}}"
                {{#if required}}required{{/if}} 
                {{#if disabled}}disabled{{/if}} 
            />
        `;
    }
}
