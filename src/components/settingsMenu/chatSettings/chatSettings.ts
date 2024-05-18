import Block, { CommonProps } from '../../../core/Block';
import { Button } from '../../button/button';
import { сhatSettingsButtons } from './helpers';

interface ChatSettingsProps extends CommonProps {
    buttonsKeys?: string[];
}

export class ChatSettings extends Block<ChatSettingsProps> {
    constructor(props: ChatSettingsProps) {
        const buttons = сhatSettingsButtons.reduce(
            (acc, data) => {
                const component = new Button(data);
                acc[component.id] = component;
                return acc;
            },
            {} as Record<string, Button>
        );

        super({
            ...props,
            buttonsKeys: Object.keys(buttons),
            ...buttons,
        });
    }

    render() {
        const keys = this.props.buttonsKeys || [];
        const renderButtons = keys
            .map((key) => `<li>{{{ ${key} }}}</li>`)
            .join('');

        return `
            <div class="chatSettings">
                <div class="shadow-box shadow-box_small-padding">
                    <ul class="chatSettings-list">
                        ${renderButtons}
                    </ul>
                </div>
            </div>    
        `;
    }
}
