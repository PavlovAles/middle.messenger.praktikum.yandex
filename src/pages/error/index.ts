import './error.css';
export { default as ErrorPage } from './error.hbs?raw';

export const getErrorPageContext = (code: '404' | '500') => {
    if (code === '404') {
        return {
            code,
            text: 'Не туда попали',
        };
    } else {
        return {
            code,
            text: 'Мы уже фиксим',
        };
    }
};
