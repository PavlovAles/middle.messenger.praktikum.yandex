import Block, { CommonProps } from '../../core/Block';

interface MessageFormProps extends CommonProps {}

export class MessageForm extends Block<MessageFormProps> {
    constructor(props: MessageFormProps) {
        super({
            ...props,
        });
    }

    render() {
        return `
            <form class="message-form" id="message-form">
                <input class="message-form__input" type="text" name="message" placeholder="Сообщение"
                    autocomplete="off" />
            </form>
        `;
    }
}
