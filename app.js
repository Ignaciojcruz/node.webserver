require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estático
app.use( express.static('public'));

//controlador
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Ignacio Cruz',
        titulo: 'Curso de node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Ignacio Cruz',
        titulo: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Ignacio Cruz',
        titulo: 'Curso de node'
    })
});

app.get('/hola-mundo', (req, res) =>{
    res.send('Hola mundo en su respectiva ruta')
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
});