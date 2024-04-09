import Handlebars from 'handlebars';
import './chatList.css';
export { default as ChatList } from './chatList.hbs?raw';

const testData = [
    {
        chatName: 'А',
        newMessagesCount: 0,
        active: false,
        lastMessage: {
            from: '',
            text: 'а',
            date: 'Ср',
        },
    },
    {
        chatAvatar: 'https://source.unsplash.com/random/200x200',
        chatName: 'Some name',
        newMessagesCount: 145,
        active: false,
        lastMessage: {
            from: 'Some user',
            text: 'привет че как',
            date: '16:20',
        },
    },
    {
        chatAvatar: 'https://source.unsplash.com/random/200x200',
        chatName: 'Some reaaaaalllly long name for chat group',
        newMessagesCount: 14519,
        active: false,
        lastMessage: {
            from: 'Whaaaaaat',
            text: 'asd fasd fasdfasd fasd fasd fasdfi asdfaoisdj fasid jfaisd faisdf asdf ',
            date: '24 февраля 2022',
        },
    },
];

Handlebars.registerHelper('chats', () => {
    return [{ ...testData[1], active: true }].concat(
        ...Array(7).fill(testData),
    );
});
