import Handlebars from 'handlebars';
import { pages } from './constants/pages';
import { registerHelpers } from './utils/helpers';
import * as Components from './components';

registerHelpers();

Object.entries(Components).forEach(([name, component]) => {
    Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
    const [source, context] = pages[page];
    const container = document.getElementById('app')!;
    container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', (e) => {
    const page = (e.target as HTMLElement).getAttribute('page');
    if (page) {
        navigate(page);

        e.preventDefault();
        e.stopImmediatePropagation();
    }
});
