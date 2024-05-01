import * as Pages from './pages';
import { testUser } from './utils/mocks';
import { router } from './utils/router';

document.addEventListener('DOMContentLoaded', () => {
    router
        .use('/main', Pages.MainPage)
        .use('/login', Pages.LoginPage, { type: 'login' })
        .use('/registration', Pages.LoginPage, { type: 'registration' })
        .use('/profile', Pages.ProfilePage, { type: 'info', user: testUser })
        .use('/404', Pages.ErrorPage, { code: 404 })
        .use('/500', Pages.ErrorPage, { code: 500 })
        .start();
});
