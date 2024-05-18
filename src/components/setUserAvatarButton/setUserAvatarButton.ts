import Block, { CommonProps } from '../../core/Block';
import { connect } from '../../utils/connect';
import { Avatar } from '../avatar';

interface SetUserAvatarButtonProps extends CommonProps {
    src?: string;
    name?: string;
}

class SetUserAvatarButton extends Block<SetUserAvatarButtonProps> {
    constructor(props: SetUserAvatarButtonProps) {
        super({
            ...props,
            Avatar: new Avatar({
                src: props.src,
                name: props.name || '',
            }),
        });
    }

    protected componentDidUpdate(
        oldProps: SetUserAvatarButtonProps,
        newProps: SetUserAvatarButtonProps
    ): boolean {
        if (oldProps.src === newProps.src) {
            return false;
        }
        this.children.Avatar.setProps({ src: newProps.src });
        return true;
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

const Connected = connect<SetUserAvatarButtonProps>((state) => ({
    src: state.user?.avatar,
    name: state.user?.first_name,
}))(SetUserAvatarButton);

export { Connected as SetUserAvatarButton };
