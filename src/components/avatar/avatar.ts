import { RESOURCES_HOST } from '../../constants';
import Block, { CommonProps } from '../../core/Block';

export interface AvatarProps extends CommonProps {
    name?: string;
    src?: string;
}

export class Avatar extends Block<AvatarProps> {
    constructor(props: AvatarProps) {
        super({ ...props });
    }

    render() {
        const src = RESOURCES_HOST + this.props.src;
        return `
          <div class="avatar {{#unless src}}avatar_no-src{{/unless}}">
              {{#if src}}
                  <img class="avatar_img" src="${src}" alt="Аватар {{name}}" />
              {{/if}}
          </div>
        `;
    }
}
