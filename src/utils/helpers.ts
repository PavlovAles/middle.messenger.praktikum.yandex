import Handlebars from 'handlebars';

Handlebars.registerHelper('ifEquals', function (arg1, arg2, options) {
    //@ts-ignore
    return arg1 == arg2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper('ifNotEquals', function (arg1, arg2, options) {
    //@ts-ignore
    return arg1 !== arg2 ? options.fn(this) : options.inverse(this);
});
