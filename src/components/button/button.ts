import Block, { CommonProps } from '../../core/Block';
import { Icon } from '../icon';
import { IconType } from '../icon/icon';

export interface ButtonProps extends CommonProps {
    text?: string;
    variant: 'primary' | 'medium' | 'success' | 'danger';
    fill: 'solid' | 'outline' | 'link' | 'ghost';
    align?: 'left' | 'center' | 'right';
    icon?: IconType;
    iconLast?: boolean;
    asIconButton?: boolean;
    id?: string;
}

export class Button extends Block<ButtonProps> {
    constructor(props: ButtonProps) {
        super({
            ...props,
            Icon: props.icon ? new Icon({ icon: props.icon }) : undefined,
        });
    }

    render(): string {
        return `
            <button 
                type="{{type}}" 
                id="{{id}}"
                class="
                    mainButton mainButton_variant_{{variant}} 
                    mainButton_fill_{{fill}} 
                    {{#if align}}mainButton_align_{{align}}{{/if}} 
                    {{#if asIconButton}}mainButton_with-icon-only{{/if}} 
                    {{#if iconLast}}mainButton_icon-last{{/if}}
                "
            >
                {{#if icon}}
                    <div class="mainButton__icon">
                        {{{ Icon }}}
                    </div>
                {{/if}}
                {{text}}
            </button>
        `;
    }
}
