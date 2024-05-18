const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/dist'));

app.get('/', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/sign-up', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/sign-in', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/messenger', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/settings', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/settings-edit', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/password-edit', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/error500', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});
app.get('/error404', (_, res) => {
    res.sendFile(`${__dirname}/dist/index.html`);
});

app.listen(PORT, () => console.log(`Server on port ${PORT} was started`));
