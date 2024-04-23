import Block, { CommonProps } from '../../core/Block';

interface ModalProps extends CommonProps {
    open?: boolean;
    Content: Block<CommonProps>;
}

export class Modal extends Block<ModalProps> {
    protected init() {
        const onModalClickBind = this.onModalClick.bind(this);
        this.setProps({ events: { click: onModalClickBind } });
    }

    private onModalClick(e: Event) {
        if (e.target === e.currentTarget) {
            this.props.open = false;
        }
    }

    render() {
        return `
            <div class="modal {{#if open}}modal_open{{/if}}">
                <div class="modal__content">
                    {{{ Content }}}
                </div>
            </div>
        `;
    }
}
