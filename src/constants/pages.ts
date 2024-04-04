import * as Pages from '../pages';

export const pages: Record<string, any[]> = {
    'nav': [Pages.NavigatePage],
    'test': [Pages.TestPage],
    'main': [Pages.MainPage],
    'login': [Pages.LoginPage, Pages.getLoginPageContext('login')],
    'error-404': [Pages.ErrorPage, Pages.getErrorPageContext('404')],
    'error-500': [Pages.ErrorPage, Pages.getErrorPageContext('500')],
    'registration': [
        Pages.LoginPage,
        Pages.getLoginPageContext('registration'),
    ],
    'profile': [Pages.ProfilePage, Pages.getProfilePageContext('info')],
    'profile-change-info': [
        Pages.ProfilePage,
        Pages.getProfilePageContext('changeInfo'),
    ],
    'profile-change-password': [
        Pages.ProfilePage,
        Pages.getProfilePageContext('changePassword'),
    ],
};