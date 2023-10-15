const express = require('express');
const configFile = require('./constants.js');

const app = express();

app.use(express.urlencoded({extended: false})); 

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

app.listen(configFile.PORT, () => console.log(`Server is listening on Port: ${configFile.PORT}...`));