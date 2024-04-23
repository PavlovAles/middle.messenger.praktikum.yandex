import Block, { CommonProps } from '../../core/Block';
import { Button } from '../button';

interface ChangeAvatarFormProps extends CommonProps {
    file?: string;
    errorOnLoad?: boolean;
    noFileClick?: boolean;
    title: string;
}

export class ChangeAvatarForm extends Block<ChangeAvatarFormProps> {
    constructor(props: ChangeAvatarFormProps) {
        super({
            ...props,
            Button: new Button({
                type: 'submit',
                variant: 'primary',
                fill: 'solid',
                text: 'Поменять',
                align: 'center',
            }),
        });
    }

    render() {
        return `
            <div class="shadow-box">
                <form class="changeAvatarForm" id="change-avatar-form">
                    <h2 class="changeAvatarForm__title {{#if errorOnLoad}}changeAvatarForm__title_error{{/if}}">{{title}}</h2>
                    <div class="changeAvatarForm__content">
                        {{#if file}}
                            <p class="filename">{{file}}</p>
                        {{else}}
                            <label class="input">
                                Выбрать файл на компьютере
                                <input type="file" name="avatar" hidden />
                            </label>
                        {{/if}}
                    </div>
                    <div class="changeAvatarForm__bottom">
                        {{{ Button }}}
                        {{#if noFileClick}}<p class="changeAvatarForm__no-file-click">Нужно выбрать файл</p>{{/if}}
                    </div>
                </form>
            </div>
        `;
    }
}
