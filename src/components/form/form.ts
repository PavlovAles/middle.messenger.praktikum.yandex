import Block, { CommonProps, ComponentList } from '../../core/Block';
import { InputProps } from '../baseInput/baseInput';
import { ButtonProps } from '../button/button';

export interface FormProps extends CommonProps {
    title: string;
    id: string;
    inputs?: ComponentList<InputProps>;
    buttons: ComponentList<ButtonProps>;
    onSubmit: () => void;
    inputsKeys?: string[];
    buttonsKeys?: string[];
    state?: {
        loading: boolean;
        error?: string;
        success?: string;
    };
}
export class Form extends Block<FormProps> {
    init() {
        this.setProps({
            events: {
                submit: this.handleSubmit.bind(this),
            },
        });
    }

    handleSubmit(e: Event) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {
        const inputs = this.props.inputsKeys?.map((key) => `{{{ ${key} }}}`).join('') || '';
        const buttons = this.props.buttonsKeys?.map((key) => `{{{ ${key} }}}`).join('') || '';
        return `
            <div class="shadow-box">
                <form class="form {{#if loading}}spinner{{/if}}" id="{{id}}">
                    <h2 class="form__title">{{title}}</h2>
                    <fieldset class="form__fieldset">
                        ${inputs}
                    </fieldset>
                    <div class="form__bottom">
                        {{#unless error}}<div class="form__success">{{success}}</div>{{/unless}}
                        <div class="form__error">{{error}}</div>
                        ${buttons}
                    </div>
                </form>
            </div>
        `;
    }
}
