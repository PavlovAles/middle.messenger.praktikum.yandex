import Block, { CommonProps } from '../../core/Block';

interface TooltipProps extends CommonProps {
    trigger?: HTMLElement | null;
    onHide?: () => void;
    Content: Block<CommonProps>;
}

export class Tooltip extends Block<TooltipProps> {
    private indent = 5;

    protected componentDidUpdate(oldProps: TooltipProps, newProps: TooltipProps): boolean {
        if (oldProps.trigger !== newProps.trigger) {
            this.props.trigger?.removeEventListener('mouseenter', this.onShow);
            this.props.trigger = newProps.trigger;
            this.props.trigger?.addEventListener('mouseenter', this.onShow);
        }

        return true;
    }

    protected componentDidMount(): void {
        const onHideBind = this.onHide.bind(this);
        this.element?.addEventListener('mouseleave', onHideBind);
    }

    onShow = (event: Event) => {
        if (!this.element) return;

        this.element?.classList.toggle('tooltip_active', true);

        const spanRect = ((event.target as HTMLElement) || null)?.getBoundingClientRect();
        const elRect = this.element.getBoundingClientRect();

        let top = spanRect.bottom + this.indent;
        let left = spanRect.left;

        if (top + elRect.height > document.documentElement.clientHeight) {
            top = spanRect.top - elRect.height - this.indent;
        }

        if (left + elRect.width > document.documentElement.clientWidth) {
            left = spanRect.right - elRect.width;
        }

        this.element.style.top = `${top}px`;
        this.element.style.left = `${left}px`;
    };

    onHide() {
        this.element?.classList.toggle('tooltip_active', false);
        this.props.onHide?.();
    }

    render() {
        return `
            <div class="tooltip">
                {{{ Content }}}
            </div>
        `;
    }
}
