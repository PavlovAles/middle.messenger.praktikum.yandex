import { ChatListItemProps } from '../components/chatList/chatListItem/chatListItem';
import { MessageListItemProps } from '../components/messageList/messageListItem/messageListItem';
import { User } from '../types/user';

export const testUser: User = {
    email: 'pochta@yandex.ru',
    login: 'ivanivanov',
    first_name: 'Иван',
    second_name: 'Иванов',
    display_name: 'Ваня',
    phone: '+79099673030',
};

const chatListTestData: ChatListItemProps[] = [
    {
        name: 'А',
        newMessagesCount: 0,
        active: false,
        lastMessage: {
            from: testUser,
            text: 'а',
            date: 'Ср',
        },
    },
    {
        avatar: 'https://source.unsplash.com/random/200x200',
        name: 'Some name',
        newMessagesCount: 145,
        active: false,
        lastMessage: {
            from: testUser,
            text: 'привет че как',
            date: '16:20',
        },
    },
    {
        avatar: 'https://source.unsplash.com/random/200x200',
        name: 'Some reaaaaalllly long name for chat group',
        newMessagesCount: 14519,
        active: false,
        lastMessage: {
            from: testUser,
            text: 'asd fasd fasdfasd fasd fasd fasdfi asdfaoisdj fasid jfaisd faisdf asdf ',
            date: '24 февраля 2022',
        },
    },
];

export const testChatListData = [{ ...chatListTestData[1], active: true }].concat(
    ...Array(7).fill(chatListTestData)
);

export const testMessageListData: MessageListItemProps[] = [
    {
        from: testUser,
        date: '12:00',
        text: 'Это многострочное собщение очень важно, но на самом деле здесь мог быть лорем ипсум',
        incoming: true,
    },
    {
        from: testUser,
        date: '16:20',
        image: 'https://source.unsplash.com/random/400x300',
        incoming: true,
    },
    {
        from: testUser,
        date: '06:21',
        text: 'Нормально',
        sended: true,
        readed: true,
    },
    {
        from: testUser,
        date: '11:11',
        text: 'Загадывай',
        sended: true,
        readed: false,
    },
];
