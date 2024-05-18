import Block, { CommonProps } from '../../core/Block';
import { connect } from '../../utils/connect';
import { Button } from '../button';

interface ChangeAvatarFormProps extends CommonProps {
    file?: File;
    loading?: boolean;
    error?: string;
    noFileClick?: boolean;
    title: string;
    onSubmit: (data: FormData) => void;
}

class ChangeAvatarForm extends Block<ChangeAvatarFormProps> {
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

    init() {
        this.setProps({
            events: {
                submit: this.handleSubmit.bind(this),
                change: this.handleChange.bind(this),
            },
        });
    }

    handleSubmit(e: Event) {
        e.preventDefault();
        this.setProps({ error: '' });
        if (!this.props.file) {
            this.setProps({ error: 'Нужно выбрать файл' });
            return;
        }
        const formData = new FormData();
        formData.append('avatar', this.props.file);
        this.props.onSubmit(formData);
    }

    handleChange(e: Event) {
        const input = e.target as HTMLInputElement;
        if (!input.files) return;
        const file = input.files[0];
        this.setProps({ file });
    }

    render() {
        const filename = this.props.file?.name;

        return `
            <div class="shadow-box">
                <form class="changeAvatarForm {{#if loading}}spinner{{/if}}" name="change-avatar-form">
                    <h2 class="changeAvatarForm__title {{#if error}}changeAvatarForm__title_error{{/if}}">{{title}}</h2>
                    <div class="changeAvatarForm__content">
                        {{#if file}}
                            <p class="filename">${filename}</p>
                        {{else}}
                            <label class="input">
                                Выбрать файл на компьютере
                                <input type="file" name="avatar" hidden />
                            </label>
                        {{/if}}
                    </div>
                    <div class="changeAvatarForm__bottom">
                        {{{ Button }}}
                        {{#if error}}<p class="changeAvatarForm__error">{{error}}</p>{{/if}}
                    </div>
                </form>
            </div>
        `;
    }
}

const Connected = connect<ChangeAvatarFormProps>(({ avatarForm }) => ({
    loading: avatarForm?.loading,
    error: avatarForm?.error,
}))(ChangeAvatarForm);

export { Connected as ChangeAvatarForm };
