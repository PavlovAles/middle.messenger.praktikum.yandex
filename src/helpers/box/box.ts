import Handlebars from 'handlebars';
import styles from './box.module.css';

function box(options: any) {
    //@ts-ignore
    return new Handlebars.SafeString(`<div class="${styles.box}">${options.fn(this)}</div>`);
}

export default box;