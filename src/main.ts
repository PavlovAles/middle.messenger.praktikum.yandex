import Handlebars from 'handlebars';
import { pages } from './constants/pages';

function navigate(page: keyof typeof pages) {
    const [PageClass, context] = pages[page];
    const container = document.getElementById('app')!;

    if (typeof PageClass === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const pageComponent = new PageClass(context as any);
        container.innerHTML = '';
        container.append(pageComponent.getContent() || '');
        return;
    }

    container.innerHTML = Handlebars.compile(PageClass)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', (e) => {
    const page = (e.target as HTMLElement).getAttribute('page');
    if (page) {
        navigate(page as keyof typeof pages);
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});
