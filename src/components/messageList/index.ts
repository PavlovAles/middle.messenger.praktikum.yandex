import Handlebars from 'handlebars';
import './messageList.css';
export { default as MessageList } from './messageList.hbs?raw';

const testData = [
    {
        date: '21 марта 2024',
        messages: [
            {
                time: '12:00',
                text: 'Это многострочное собщение очень важно, но на самом деле здесь мог быть лорем ипсум',
                incoming: true,
            },
            {
                time: '16:20',
                image: 'https://source.unsplash.com/random/400x300',
                incoming: true,
            },
        ],
    },
    {
        date: 'сегодня',
        messages: [
            {
                time: '06:21',
                text: 'Нормально',
                sended: true,
                readed: true,
            },
            {
                time: '11:11',
                text: 'Загадывай',
                sended: true,
                readed: false,
            },
        ],
    },
];

Handlebars.registerHelper('feed', () => {
    return [].concat(...Array(7).fill(testData));
});
