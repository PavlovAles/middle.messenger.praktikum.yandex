import Block, { CommonProps } from '../../core/Block';
import { Avatar } from '../avatar';

interface SetUserAvatarButtonProps extends CommonProps {
    src?: string;
    name: string;
}

export class SetUserAvatarButton extends Block<SetUserAvatarButtonProps> {
    constructor(props: SetUserAvatarButtonProps) {
        super({
            ...props,
            Avatar: new Avatar({
                src: props.src,
                name: props.name,
            }),
        });
    }

    render() {
        return `
            <button type="button" class="setUserAvatarButton">
                {{{ Avatar }}}
                <div class="setUserAvatarButton__overlay">Поменять аватар</div>
            </button>    
        `;
    }
}
