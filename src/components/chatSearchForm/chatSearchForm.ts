import Block, { CommonProps } from '../../core/Block';

interface ChatSearchFormProps extends CommonProps { }

export class ChatSearchForm extends Block<ChatSearchFormProps> {
    constructor(props: ChatSearchFormProps) {
        super({
            ...props,
        });
    }

    render() {
        return `
            <form class="chat-search-form" id="chat-search">
                <input class="chat-search-form__input" type="text" name="message" placeholder="Поиск" />
            </form>
        `;
    }
}
