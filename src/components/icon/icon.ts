import Block, { CommonProps } from '../../core/Block';

export type IconType =
    'file' |
    'arrow-left' |
    'arrow-right' |
    'alt' |
    'image' |
    'location' |
    'magnifer' |
    'menu' |
    'paperclip' |
    'read' |
    'unread' |
    'settings' |
    'user' |
    'remove' |
    'add' |
    'pencil';

interface IconProps extends CommonProps {
    icon: IconType;
    small?: boolean;
}
export class Icon extends Block<IconProps> {
    render() {
        return `
            <div class="icon {{#if small}}icon_small{{/if}}">
                <svg width="{{#if small}}12{{else}}24{{/if}}" height="{{#if small}}12{{else}}24{{/if}}">
                    <use xlink:href="#{{icon}}-ico"/>
                </svg>
            </div>
        `;
    }
}
