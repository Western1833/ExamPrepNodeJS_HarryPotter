const express = require('express');
const configFile = require('./constants.js');
const path = require('path');

const app = express();

//Express configurations/middlewares
app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.urlencoded({extended: false})); 

//Paths
app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(configFile.PORT, () => console.log(`Server is listening on Port: ${configFile.PORT}...`));