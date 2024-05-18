import Block, { CommonProps } from '../../../core/Block';
import { MyStoreFormNameFields } from '../../../core/store';
import { ProfileInfoInput } from '../../../types/input';
import { User } from '../../../types/user';
import { connect } from '../../../utils/connect';

interface InputProps extends CommonProps, Record<ProfileInfoInput, string | undefined> {
    type: string;
    name: MyStoreFormNameFields;
    value?: string;
    required?: boolean;
    disabled?: boolean;
    errorMessage?: string;
    user?: User | null;
}

class InputField extends Block<InputProps> {
    init() {
        const fieldName = this.props.name;
        const value = this.props[fieldName as ProfileInfoInput] || '';
        this.setProps({ value });
    }

    render() {
        const fieldName = this.props.name;
        const value = this.props.value || this.props[fieldName] || '';
        return `
            <input class="profileFormInput__input" 
                type="{{type}}"
                name="{{name}}"
                value="${value}"
                {{#if required}}required{{/if}} 
                {{#if disabled}}disabled{{/if}} 
            />
        `;
    }
}

const Connected = connect<InputProps>(({ user }) => ({
    display_name: user?.display_name,
    email: user?.email,
    first_name: user?.first_name,
    login: user?.login,
    phone: user?.phone,
    second_name: user?.second_name,
}))(InputField);
export { Connected as InputField };
