import { JSDOM } from 'jsdom';

// jsdom
const jsdom = new JSDOM(`<body><div id="app"></div></body>`, { url: 'http://localhost' });

global.window = jsdom.window;
global.document = jsdom.window.document;
global.navigator = jsdom.window.navigator;
global.location = jsdom.window.location;
global.FormData = jsdom.window.FormData;
global.XMLHttpRequest = jsdom.window.XMLHttpRequest;
global.Node = jsdom.window.Node;
global.MouseEvent = jsdom.window.MouseEvent;
