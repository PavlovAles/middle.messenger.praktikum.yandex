import * as Pages from '../pages';
import { testUser } from '../utils/mocks';

export const pages = {
    'nav': [Pages.NavigatePage],
    'main': [Pages.MainPage],
    'login': [Pages.LoginPage, { type: 'login' }],
    'registration': [Pages.LoginPage, { type: 'registration' }],
    'profile': [Pages.ProfilePage, { type: 'info', user: testUser }],
    'error-404': [Pages.ErrorPage, { code: 404 }],
    'error-500': [Pages.ErrorPage, { code: 500 }],
};
