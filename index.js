const express = require('express');
const hbs     = require('hbs')

/* Inicializo app */
const app = express();

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

/* Carpeta pública */
app.use(express.static('public'))

//Routes
app.get('/',(req,res) =>{
    res.render('home', {
        nombre: 'Jesús Farias',
        titulo: 'Aprendo Node'
    })
})

app.get('/generic', (req,res) =>{
    res.render('generic',{
        titulo: 'Generic'
    })
}) 

app.get('/elements', (req,res) =>{
    res.render('elements', {
        titulo: 'Elements'
    })
}) 


app.get("*", (req,res) =>{
    res.render('404')
})


const port = 3000
app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})
