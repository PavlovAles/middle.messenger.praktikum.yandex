import Block, { CommonProps } from '../../core/Block';
import { Button } from '../button';
import { Tooltip } from '../tooltip';
import { AttachmentButtons } from './attachmentButtons';

interface AttachmentMenuProps extends CommonProps {}

export class AttachmentMenu extends Block<AttachmentMenuProps> {
    init() {
        const Trigger = new Button({
            type: 'button',
            variant: 'primary',
            fill: 'ghost',
            icon: 'paperclip',
            asIconButton: true,
        });

        const AttachmentTooltip = new Tooltip({
            Content: new AttachmentButtons({}),
        });

        this.children = {
            ...this.children,
            Trigger,
            AttachmentTooltip,
        };
    }

    protected componentDidMount(): void {
        const button = this.children.Trigger.getContent();
        if (!button) return;
        this.children.AttachmentTooltip.setProps({ trigger: button });
    }

    render() {
        return `
            <div class="attachmentMenu">
                {{{ Trigger }}}
                {{{ AttachmentTooltip }}}
            </div>
        `;
    }
}
