const express = require('express')

/* Inicializo app */
const app = express();

//Handlebars
app.set('view engine', 'hbs');


/* Carpeta pública */
app.use(express.static('public'))

//Routes
app.get('/',(req,res) =>{
    res.render('home', {
        nombre: 'Jesús Farias',
        titulo: 'Aprendo Node'
    });
})

app.get('/generic', (req,res) =>{
    res.sendFile(__dirname + '/public/generic.html')
}) 

app.get('/elements', (req,res) =>{
    res.sendFile(__dirname + '/public/elements.html')
}) 


app.get("*", (req,res) =>{
    res.sendFile(__dirname + '/public/404.html')
})


const port = 3000
app.listen(port, ()=>{
    console.log(`Servidor iniciado en el puerto ${port}`)
})
