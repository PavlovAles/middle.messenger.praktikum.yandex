import { Button } from '../../components';
import Block, { CommonProps } from '../../core/Block';
import router from '../../utils/router';

interface ErrorPageProps extends CommonProps {
    code: number;
    text?: string;
}
export class ErrorPage extends Block<ErrorPageProps> {
    constructor(props: ErrorPageProps) {
        super({
            ...props,
            text: props.code === 404 ? 'Не туда попали' : 'Мы уже фиксим',
            Button: new Button({
                type: 'button',
                variant: 'primary',
                fill: 'link',
                text: 'Назад к чатам',
                align: 'center',
                events: {
                    click: () => router.go('/messenger'),
                },
            }),
        });
    }

    render() {
        return `
            <main class="errorPage">
                <h1 class="errorPage__code">{{code}}</h1>
                <p class="errorPage__text">{{text}}</p>
                {{{ Button }}}
            </main>
        `;
    }
}
