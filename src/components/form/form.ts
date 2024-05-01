import Block, { CommonProps, ComponentList } from '../../core/Block';
import { Input } from './input';
import { ButtonProps } from '../button/button';
import { InputProps } from './input/input';

export interface FormProps extends CommonProps {
    title: string;
    id: string;
    inputs?: ComponentList<InputProps>;
    buttons: ComponentList<ButtonProps>;
    onSubmit?: (values: Record<string, string>[]) => void;
    inputsKeys?: string[];
    buttonsKeys?: string[];
}
export class Form extends Block<FormProps> {
    private valid: boolean = false;
    private values: Record<string, string>[] = [];

    init() {
        this.setProps({
            events: {
                submit: this.handleSubmit.bind(this),
            },
        });
    }

    collectValuesAndValidate() {
        let isFormValid = true;
        const values: Record<string, string>[] = [];
        Object.values(this.children).forEach((children) => {
            if (children instanceof Input) {
                values.push(children.value);
                const valid = children.validate();
                if (!valid) {
                    isFormValid = false;
                }
            }
        });
        this.values = values;
        this.valid = isFormValid;
    }

    handleSubmit(e: Event) {
        e.preventDefault();
        this.collectValuesAndValidate();
        if (this.valid && this.props.onSubmit) {
            this.props.onSubmit(this.values);
        }
    }

    render() {
        const inputs = this.props.inputsKeys?.map((key) => `{{{ ${key} }}}`).join('') || '';
        const buttons = this.props.buttonsKeys?.map((key) => `{{{ ${key} }}}`).join('') || '';

        return `
            <div class="shadow-box">
                <form class="form" id="{{id}}">
                    <h2 class="form__title">{{title}}</h2>
                    <fieldset class="form__fieldset">
                        ${inputs}
                    </fieldset>
                    <div class="form__bottom">
                        ${buttons}
                    </div>
                </form>
            </div>
        `;
    }
}
