import '@babel/polyfill';
import express from 'express';
import config from './config';
import DataApi from './DataApi';

var {data} = require('../data/data');
DataApi.init(data);

var app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    res.render('index');
});
app.get('/create', async (req, res) => {
    res.render('index');
});
app.get('/data', (req, res) => {
    res.send(DataApi.getAllData());
});

app.listen(config.port, function listenHandler() {
    console.info(`Running  on ${config.port}...`);
});
