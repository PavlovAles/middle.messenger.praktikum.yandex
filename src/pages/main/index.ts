import './main.css';
export { default as MainPage } from './main.hbs?raw';

export const getMainPageContext = () => {
    return {
        chatName: 'Ччччат',
    };
};
