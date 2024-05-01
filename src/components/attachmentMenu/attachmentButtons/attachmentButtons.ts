import Block, { CommonProps } from '../../../core/Block';
import { Button } from '../../button';

interface AttachmentButtonsProps extends CommonProps { }
export class AttachmentButtons extends Block<AttachmentButtonsProps> {
    constructor(props: AttachmentButtonsProps) {
        super({
            ...props,
            PhotoButton: new Button({
                type: 'button',
                variant: 'primary',
                fill: 'ghost',
                text: 'Фото или Видео',
                icon: 'image',
                align: 'left',
            }),
            FileButton: new Button({
                type: 'button',
                variant: 'primary',
                fill: 'ghost',
                text: 'Файл',
                icon: 'file',
                align: 'left',
            }),
            LocationButton: new Button({
                type: 'button',
                variant: 'primary',
                fill: 'ghost',
                text: 'Локация',
                icon: 'location',
                align: 'left',
            }),
        });
    }

    render() {
        return `
            <div class="attachmentButtons">
                <div class="shadow-box shadow-box_small-padding">
                    <ul class="attachmentButtons-list">
                        <li class="attachmentButtons-list__item">
                            {{{ PhotoButton }}}
                        </li>
                        <li class="attachmentButtons-list__item">
                            {{{ FileButton }}}
                        </li>
                        <li class="attachmentButtons-list__item">
                            {{{ LocationButton }}}
                        </li>
                    </ul>
                </div>
            </div>    
        `;
    }
}
