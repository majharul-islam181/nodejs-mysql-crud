const express = require('express');
const color = require('colors')
const morgan = require('morgan')

const app = express();

//middleware
app.use(morgan('dev'));


//routes
app.get('/test', (req, res)=>{
    res.status(200).send(
        'Welcome to Node With Mysql'
    )
});

//ports
const PORT = 8090;

//listen
app.listen(PORT, ()=>{
    console.log(`Server Running at ${PORT}`.bgMagenta.white)
})