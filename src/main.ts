import Handlebars from 'handlebars';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'login': [Pages.LoginPage, Pages.getLoginPageContext('login')],
  'registration': [Pages.LoginPage, Pages.getLoginPageContext('registration')],
  'main': [Pages.MainPage],
  'profile': [Pages.ProfilePage, Pages.getProfilePageContext('info')],
  'profile-change-info': [Pages.ProfilePage, Pages.getProfilePageContext('changeInfo')],
  'profile-change-password': [Pages.ProfilePage, Pages.getProfilePageContext('changePassword')],
  'nav': [Pages.NavigatePage],
  'test': [Pages.TestPage],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('nav'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
  //@ts-ignore
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifNotEquals', function (arg1, arg2, options) {
  //@ts-ignore
  return (arg1 !== arg2) ? options.fn(this) : options.inverse(this);
});