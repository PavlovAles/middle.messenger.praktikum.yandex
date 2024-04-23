import Block, { CommonProps } from '../../../core/Block';
import { Button } from '../../button/button';
import { getChatSettingsButtonList } from './helpers';

interface ChatSettingsProps extends CommonProps {
    settingType: 'direct' | 'group' | 'changeGroup';
    directButtonsKeys?: string[];
    groupButtonsKeys?: string[];
    changeGroupButtonsKeys?: string[];
}

export class ChatSettings extends Block<ChatSettingsProps> {
    constructor(props: ChatSettingsProps) {
        const directButtons = getChatSettingsButtonList('direct').reduce(
            (acc, data) => {
                const component = new Button(data);
                acc[component.id] = component;
                return acc;
            },
            {} as Record<string, Button>
        );
        const groupButtons = getChatSettingsButtonList('group').reduce(
            (acc, data) => {
                const component = new Button(data);
                acc[component.id] = component;
                return acc;
            },
            {} as Record<string, Button>
        );
        const changeGroupButtons = getChatSettingsButtonList('changeGroup').reduce(
            (acc, data) => {
                const component = new Button(data);
                acc[component.id] = component;
                return acc;
            },
            {} as Record<string, Button>
        );

        super({
            ...props,
            directButtonsKeys: Object.keys(directButtons),
            ...directButtons,
            groupButtonsKeys: Object.keys(groupButtons),
            ...groupButtons,
            changeGroupButtonsKeys: Object.keys(changeGroupButtons),
            ...changeGroupButtons,
        });
    }

    render() {
        const buttons =
            (this.props.settingType === 'direct' && this.props.directButtonsKeys) ||
            (this.props.settingType === 'group' && this.props.groupButtonsKeys) ||
            (this.props.settingType === 'changeGroup' && this.props.changeGroupButtonsKeys) ||
            [];
        const renderButtons = buttons.map((key) => `<li>{{{ ${key} }}}</li>`).join('');

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
