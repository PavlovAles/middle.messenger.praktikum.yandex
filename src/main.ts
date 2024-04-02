import Handlebars from 'handlebars';
import * as helpers from './helpers';
import * as Components from './components';
import * as Pages from './pages';

const pages = {
  'login': [Pages.LoginPage],
  'registration': [Pages.RegistrationPage],
  'nav': [Pages.NavigatePage],
  'test': [Pages.TestPage],
};

Object.entries(Components).forEach(([name, component]) => {
  Handlebars.registerPartial(name, component);
});

Object.entries(helpers).forEach(([name, helper]) => {
  Handlebars.registerHelper(name, helper);
});

function navigate(page: string) {
  //@ts-ignore
  const [source, context] = pages[page];
  const container = document.getElementById('app')!;
  container.innerHTML = Handlebars.compile(source)(context);
}

document.addEventListener('DOMContentLoaded', () => navigate('test'));

document.addEventListener('click', e => {
  //@ts-ignore
  const page = e.target.getAttribute('page');
  if (page) {
    navigate(page);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});


