import Block, { CommonProps } from '../../../core/Block';
import { Message } from '../../../types/message';
import { Icon } from '../../icon';

export interface MessageListItemProps extends CommonProps, Message { }

export class MessageListItem extends Block<MessageListItemProps> {
    constructor(props: MessageListItemProps) {
        super({
            ...props,
            Icon: new Icon({
                icon: props.readed ? 'read' : 'unread',
                small: true,
            })
        });
    }

    render() {
        return `
            <div class="
                messageListItem 
                {{#if incoming}}messageListItem_incoming{{/if}}
                {{#if image}}messageListItem_image{{/if}}
            ">
                {{#if text}}
                    {{text}}<span class="timeSpaceHolder"></span>
                {{/if}}
            
                {{#if image}}
                    <img src="{{image}}" class="image" alt="{{#if imageAlt}}{{imageAlt}}{{/if}}"/>
                {{/if}}
            
                <div class="time {{#if image}}time_image{{/if}}">
                    {{#unless incoming}}
                        {{{ Icon }}}
                    {{/unless}}    
                    {{date}}
                </div>
            </div>    
        `;
    }
}
